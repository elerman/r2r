import React from 'react';
import R2RAirhop from './R2RAirhop'

class R2RAirleg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const results = this.props.results
    const hops = this.props.airleg.hops.map((hop,index)=>{
        return <li key={index}><R2RAirhop airhop={hop} results={results} /></li>
    })

    return (<div className="r2r-airleg">Outbounds:<br/><ul>{hops}</ul></div>);
  }

}

export default R2RAirleg;
