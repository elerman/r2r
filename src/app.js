import React from 'react';
import {render} from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/App'
import Search from './containers/Search'
import Results from './containers/Results'
import NoMatch from './containers/NoMatch'

import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'


const middleware = routerMiddleware(browserHistory)
export const store = createStore(reducers, applyMiddleware(thunk, middleware));
const history = syncHistoryWithStore(browserHistory, store)

render(
    (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Search}/>
                    <Route path="search" component={Search}/>
                    <Route path="results" component={Results}>
                        <Route path=":oName/:dName" component={Results}/>
                    </Route>
                    <Route path="*" component={NoMatch} />
                </Route>
            </Router>
        </Provider>
    )
    , document.getElementById("root"))