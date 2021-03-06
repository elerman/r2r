import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import R2Route from '../components/R2Route'
import Loader from '../components/Loader'
import Leaflet from '../components/Leaflet'

import {getResults, goSearch} from '../actions/Search'
import {routeSelection} from '../actions/Results'

import $ from 'jquery'
import _ from 'underscore'

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {sidebarResizeHandler: null}
  }

  render() {
    if(this.props.results){
        const list = this.props.results.routes.map((route,index)=>{
            return (<li key={index} onClick={()=>{this.props.routeSelection(route)}}>
                <R2Route route={route} results={this.props.results} />
              </li>)
        })

        return (
          <div className="row">
            <div className="col col-md-5" id="sidebar">
              <ul>{list}</ul>
            </div>
            <div className="col col-md-7" id="main-display">
              <Leaflet route={this.props.selectedRoute} results={this.props.results}/>
            </div>
          </div>
        )
        
    }else{
      return <Loader />
    } 
  }

  componentDidUpdate() {
    if(this.props.results && !this.state.sidebarResizeHandler){
        $(window).on("resize.sidebar", function () { 
              $("#sidebar").height($(window).height()-30); 
        }).trigger("resize.sidebar");
        this.setState({sidebarResizeHandler: 'resize.handler'})
    }
  }

  componentWillUnmount() {
    $(window).off(this.state.sidebarResizeHandler)
  }

  componentWillMount() {
    if(this.props.oPlace && this.props.dPlace){
      this.props.getResults(this.props.oPlace, this.props.dPlace)
    }else if(this.props.params){
      if(!this.props.params.oName || !this.props.params.dName) {
        this.props.goSearch()
      }else
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
        dPlace: state.searchReducer.dPlace, 
        selectedRoute: state.resultsReducer.selectedRoute
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResults: getResults,
    goSearch: goSearch,
    routeSelection: routeSelection
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
