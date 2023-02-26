import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {addPost, addTexarea} from "./components/Redux/State";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let myProjeckt= (state)=> {
    root.render(
        <React.StrictMode>
            <App State={state} addTexarea={addTexarea} addPost={addPost}  />
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

