import { Component, ReactNode, createElement, createRef } from "react";
import { hot } from "react-hot-loader/root";
import { BizzomateConversationListContainerProps } from "../typings/BizzomateConversationListProps";
import classNames from 'classnames'
import { ListDataSource } from "./components/ListDataSource";

import "./ui/BizzomateConversationList.css";

class BizzomateConversationList extends Component<BizzomateConversationListContainerProps> {
    private messagesEndRef = createRef<HTMLDivElement>();
    private readonly scrollToBottomAction = this.scrollToBottom.bind(this);

    private scrollToBottom(): void {
        if (this.messagesEndRef.current && this.props.conversationListDataSource.status == "available"){
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            setTimeout(this.scrollToBottomAction, 15);
        }
    }

    componentDidMount(): void {
        setTimeout(this.scrollToBottomAction, 15);
    }
    componentDidUpdate(): void {
        setTimeout(this.scrollToBottomAction, 15);
    }

    render(): ReactNode {
        const className = classNames('mx-listview bizzomate-conversationList', /*{ 'message-list': this.props.conversationListMessageStyling},*/ this.props.class);
        const emptyMessage = this.props.conversationListEmptyMessage?.value || "";
        const listStyle = this.props.style || {};

        if (this.props.conversationListMaxHeight) {
            listStyle.maxHeight = this.props.conversationListMaxHeight;
        }

        return (
            <div
                className={className}
                style={listStyle}>
                <ul>
                    <ListDataSource
                        listData={this.props.conversationListDataSource}
                        listItemContent={this.props.conversationListItemContent}
                        emptyMessage={emptyMessage}
                    />
                </ul>
                <div className="bizzomate-conversationList-endref" ref={this.messagesEndRef} />
            </div>
        );
    }
}

export default hot(BizzomateConversationList);
