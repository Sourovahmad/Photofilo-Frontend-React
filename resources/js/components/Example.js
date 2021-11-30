import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import Router from './router/Router';

function Example() {
    return (
        <BrowserRouter>
           <Router></Router>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('indexPage')) {
    ReactDOM.render(<Example />, document.getElementById('indexPage'));
}
