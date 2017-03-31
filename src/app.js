import React from 'react';
import {render} from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/App'

var store = createStore(reducers, applyMiddleware(thunk));
render(<Provider store={store}><App /></Provider>, document.getElementById("root"))
 