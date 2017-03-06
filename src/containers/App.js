import React from 'react';
import css from './app.less'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {someAction} from '../actions/index'
import Search from './Search'
import Results from './Results'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="app row justify-content-center">
        <div className="col-md">
          <Search />
          <Results />
        </div>
      </section>
    );
  }
}

export default connect(null, null)(App);