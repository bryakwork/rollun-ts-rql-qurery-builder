import WidgetBase from "@dojo/framework/widget-core/WidgetBase";
import {w, v} from '@dojo/framework/widget-core/d';
import TitlePane from "@dojo/widgets/title-pane";
import QueryEditor from './QueryEditor';
import Query from 'rollun-ts-rql/dist/Query';
import theme from '@dojo/themes/dojo';
import {WNode} from "@dojo/framework/widget-core/interfaces";

export interface EditorPaneProps {
    query: Query,
    fieldNames: string[]
}

export default class QueryEditorInTitlePane extends WidgetBase<EditorPaneProps> {
    private isOpen: boolean = false;

    protected render(): WNode {
        return w(TitlePane, {
            theme,
            title: 'Edit query',
            open: this.isOpen,
            onRequestClose: () => {
                this.isOpen = false;
                this.invalidate();
            },
            onRequestOpen: () => {
                this.isOpen = true;
                this.invalidate();
            }
        }, [
            v('div', {styles: {minHeight: '600px'}}, [
                w(QueryEditor, {query: this.properties.query, fieldNames: this.properties.fieldNames})
            ])
        ])
    }
}
