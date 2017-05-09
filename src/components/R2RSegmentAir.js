import React from 'react';
import R2RAirleg from './R2RAirleg'
import Icon from './Icon'

class R2RSegmentAir extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const results = this.props.results
    const outbound = this.props.segment.outbound? (
        this.props.segment.outbound.map((leg,index)=>{
            return <div key={index}><R2RAirleg airleg={leg} results={results} /></div>
        })
    ):null

    return (
        <div className="r2r-segment-air">
            <Icon name="plane" />
            <p>Avg ticket fare: ${this.props.segment.indicativePrices[0].price}</p>
        </div>
    )
  }

}

export default R2RSegmentAir;
