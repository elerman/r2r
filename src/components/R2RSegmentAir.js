import React from 'react';
import R2RAirleg from './R2RAirleg'

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
            <p>Avg price: ${this.props.segment.indicativePrices[0].price}</p>
            {outbound}
        </div>
    )
  }

}

export default R2RSegmentAir;
