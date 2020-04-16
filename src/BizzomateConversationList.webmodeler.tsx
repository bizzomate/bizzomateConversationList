import { Component, ReactNode, createElement } from "react";
import { BizzomateConversationListPreviewProps } from "../typings/BizzomateConversationListProps";
import classNames from 'classnames'

declare function require(name: string): string;

export class preview extends Component<BizzomateConversationListPreviewProps> {
    render(): ReactNode {
        const className = classNames('mx-listview bizzomate-conversationList', this.props.class);

        return (
            <div
                className={className}>
                <ul>
                    <li>
                        <div className='mx-dataview'>
                            <div className='mx-dataview-content'>{this.props.conversationListItemContent.renderer}</div>
                        </div>
                    </li>
                    <li>
                        <div className='mx-dataview'>
                            <div className='mx-dataview-content'>{this.props.conversationListItemContent.renderer}</div>
                        </div>
                    </li>
                    <li>
                        <div className='mx-dataview'>
                            <div className='mx-dataview-content'>{this.props.conversationListItemContent.renderer}</div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/BizzomateConversationList.css");
}
