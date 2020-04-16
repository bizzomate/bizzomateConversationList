import { Component, ReactNode, createElement } from "react";
import { BizzomateConversationListPreviewProps } from "../typings/BizzomateConversationListProps";

declare function require(name: string): string;

export class preview extends Component<BizzomateConversationListPreviewProps> {
    render(): ReactNode {
        return (
            <ul>

                <li>{this.props.listItemContent}</li>

            </ul>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/BizzomateConversationList.css");
}
