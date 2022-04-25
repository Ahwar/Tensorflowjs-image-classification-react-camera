import React from 'react';
import ReactDOM from 'react-dom/client';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


const MaterialApp = () => (
    <MuiThemeProvider>
        <App store={store}/>
    </MuiThemeProvider>
);
const container = document.getElementById('root')
// Create a root.
const root = ReactDOM.createRoot(container);

root.render(<MaterialApp store={store}/>);
registerServiceWorker();


