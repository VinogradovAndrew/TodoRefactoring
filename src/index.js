import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {loadState, saveState} from './models/localStorage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

injectTapEventPlugin();

const store = createStore(
    reducer,
    loadState() || {});

store.subscribe(() => {
    saveState(store.getState())
});

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
