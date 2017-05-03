import React from 'react';
import css from '../styles/app.less'

import {connect} from 'react-redux'
import Search from './Search'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let style = css.app + ' col-md-12'

    return (
      <section className={style} id="app-section">
        {this.props.children}
      </section>
    );
  }
}

export default connect(null, null)(App);