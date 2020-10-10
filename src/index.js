import React from 'React';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
    <Provider store={configureStore()}>
       <App />
    </Provider>, 
    document.getElementById('root')
    );

    ServiceWorker.Unregister();
    