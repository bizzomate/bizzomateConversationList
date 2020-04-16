import { Component, ReactNode, createElement } from "react";
import { ObjectItem } from "mendix";

export interface ListItemProps {
    listItemContent: (item: ObjectItem) => ReactNode;
    listItem: ObjectItem;
    index: number;
}

export class ListItem extends Component<ListItemProps> {
    render(): ReactNode {
        const className = 'mx-name-index-' + this.props.index;
        return (
            <li
                className={className}
                tabIndex={-1}>
                <div className='mx-dataview'>
                    <div className='mx-dataview-content'>{this.props.listItemContent(this.props.listItem)}</div>
                </div>
            </li>);
    }
}
