import { Component, ReactNode, createElement } from "react";
import { ListValue, ObjectItem } from "mendix";
import { ListItem } from './ListItem';

export interface ListDataSourceProps {
    listData: ListValue;
    listItemContent: (item: ObjectItem) => ReactNode;
    emptyMessage?: string;
}

export class ListDataSource extends Component<ListDataSourceProps> {
    render(): ReactNode {
        if (this.props.listData.totalCount && this.props.listData.totalCount > 0) {
            return (
                this.props.listData.items?.map((item, i) =>
                    <ListItem
                        listItem={item}
                        index={i}
                        listItemContent={this.props.listItemContent}
                    />
                ));
        } else {
            return <li className="mx-listview-empty"><label>{this.props.emptyMessage}</label></li>
        }

    }
}