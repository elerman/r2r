import React from 'react';
import css from '../styles/app.less'

import {connect} from 'react-redux'
import Search from './Search'
import Results from './Results'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let style = css.app + ' container'

    return (
      <section className={style}>
        <div className="row justify-content-center">
          <div className="col col-md-6">
            <Search/>
          </div>
        </div>
        <div className="row">
          <div className="col col-md">
            <Results/>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, null)(App);