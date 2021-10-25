//packages
import React from 'react';
import ReactDOM from 'react-dom';
//local
import App from './App';
import * as registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <App/>, 
        document.getElementById("root")
);

registerServiceWorker.unregister();