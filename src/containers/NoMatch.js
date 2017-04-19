import React from 'react';
import {connect} from 'react-redux'
import R2Route from '../components/R2Route'

class NoMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
        return (
          <div className="row">
            <div className="col col-md-12" classID="sidebar">
              Oops , No match
            </div>
          </div>
        )
  }
}

const mapStateToProps = (state)=> {
    return {
       
    }
}

export default connect(mapStateToProps)(NoMatch);
