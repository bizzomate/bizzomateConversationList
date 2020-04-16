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
    maxHeight?: string;
    emptyMessage?: DynamicValue<string>;
    listItemContent: (item: ObjectItem) => ReactNode;
    listDataSource: ListValue;
}

export interface BizzomateConversationListPreviewProps {
    class: string;
    style: string;
    maxHeight: string;
    emptyMessage: string;
    listItemContent: { widgetCount: number; renderer: Component };
    listDataSource: {} | null;
}
