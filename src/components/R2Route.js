import React from 'react';
import R2RDetails from './R2RDetails'

import {Link} from 'react-router'

class R2Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {details:false}
    this.handleRouteLink = this.handleRouteLink.bind(this)
  }

  handleRouteLink(evt){
    //evt.preventDefault()
    this.setState({details:!this.state.details})
  }

  render() {
    const route = this.props.route
    const details = this.state.details? <R2RDetails route={route} results={this.props.results}/>:null
    return (
      <Link to={`/r/${route.name}`}>
        <div className="r2r-route">
            <div onClick={(evt)=>{this.handleRouteLink(evt)}}>{route.name} - ({route.indicativePrices[0].priceLow} - {route.indicativePrices[0].priceHigh})</div>
          {details}
        </div>
      </Link>
    );
  }

}

export default R2Route;
