import React from 'react'
import App from "./App";
import {ReduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreProviderDecorator";
import {Meta} from "@storybook/react";

export default {
    title: 'App component',
    component: App,
    decorators: [ReduxStoreProviderDecorator],
} as Meta

export const AppBaseExample = () => {
    return <App/>
}