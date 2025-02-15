import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App/App";
import { store } from './store/store'
import { Provider } from 'react-redux'
import './style.scss'

const container = document.getElementById('root');
if (!container) {
    throw new Error('There is no container. Please insure that it has been made')
}
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}><App /></Provider>);