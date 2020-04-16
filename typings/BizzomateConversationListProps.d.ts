/**
 * This file was generated from BizzomateConversationList.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { Component, CSSProperties, ReactNode } from "react";
import { DynamicValue, ListValue, ObjectItem } from "mendix";

export interface BizzomateConversationListContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    conversationListMaxHeight?: string;
    conversationListEmptyMessage?: DynamicValue<string>;
    conversationListItemContent: (item: ObjectItem) => ReactNode;
    conversationListDataSource: ListValue;
}

export interface BizzomateConversationListPreviewProps {
    class: string;
    style: string;
    conversationListMaxHeight: string;
    conversationListEmptyMessage: string;
    conversationListItemContent: { widgetCount: number; renderer: Component };
    conversationListDataSource: {} | null;
}
