import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render((
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
