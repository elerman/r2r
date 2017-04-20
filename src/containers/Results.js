import React from 'react';
import {connect} from 'react-redux'
import R2Route from '../components/R2Route'
import {bindActionCreators} from 'redux'

import Loader from '../components/Loader'

import {getResults} from '../actions/Search'

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.results){
        const list = this.props.results.routes.map((route,index)=>{
            return (<li key={index}>
                <R2Route route={route} results={this.props.results}/>
              </li>)
        })

        return (
          <div className="row">
            <div className="col col-md-4" classID="sidebar">
              <ul>{list}</ul>
            </div>
            <div className="col col-md-8" classID="main-display">
            </div>
          </div>
        )
        
    }else{
      const loader = this.props.loading ? <Loader />: null
      return (<div>{loader}</div>)
    } 
  }

  componentWillMount() {
    if(this.props.oPlace && this.props.dPlace){
      this.props.getResults(this.props.oPlace, this.props.dPlace)
    }else if(this.props.params){
      this.props.getResults(this.props.params.oName, this.props.params.dName)
    }
  }

}

const mapStateToProps = (state, ownProps)=> {
    return {
        results : state.searchReducer.results,
        loading: state.searchReducer.loading, 
        params: ownProps.params,
        oPlace: state.searchReducer.oPlace,
        dPlace: state.searchReducer.dPlace
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResults: getResults
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
