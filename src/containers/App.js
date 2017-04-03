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

    let style = css.app + ' row justify-content-center'

    return (
      <section className={style}>
        <div className="col-md">
          <Search />
          <Results />
        </div>
      </section>
    );
  }
}

export default connect(null, null)(App);