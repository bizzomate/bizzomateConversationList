import { Component, ReactNode, createElement, createRef } from "react";
import { hot } from "react-hot-loader/root";
import { BizzomateConversationListContainerProps } from "../typings/BizzomateConversationListProps";
import classNames from 'classnames'
import { ListDataSource } from "./components/ListDataSource";

import "./ui/BizzomateConversationList.css";

class BizzomateConversationList extends Component<BizzomateConversationListContainerProps> {


    componentDidMount(): void {
        this.scrollToBottom();
    }
    componentDidUpdate(): void {
        this.scrollToBottom();
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

    private messagesEndRef = createRef<HTMLDivElement>();

    private scrollToBottom(): void {
        console.log(this.messagesEndRef)
        this.messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
}

export default hot(BizzomateConversationList);
