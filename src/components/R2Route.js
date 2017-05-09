import React from 'react';
import R2RDetails from './R2RDetails'
import Icon from './Icon'
import {getIconName} from '../utils/main'

import css from '../styles/route.less'

class R2Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {details:false}
    this.handleRouteLink = this.handleRouteLink.bind(this)
  }

  handleRouteLink(evt){
    this.setState({details:!this.state.details})
  }

  render() {
    const route = this.props.route
    const details = this.state.details? <R2RDetails route={route} results={this.props.results}/>:null
    return (
        <section className={css.r2rRoute} onClick={(evt)=>{this.handleRouteLink(evt)}}>
            <span className="route-name">{route.name}</span> <Icon name={getIconName(route.name)} />
            <span className="route-price">{this.props.results.currencyCode} {route.indicativePrices[0].priceLow} - {route.indicativePrices[0].priceHigh}</span>
          {details}
        </section>
    );
  }

}

export default R2Route;
