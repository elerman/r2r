import React from 'react';
import R2RPlace from './R2RPlace'
import R2RAirline from './R2RAirline'

class R2RAirhop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const hop = this.props.airhop
    const results = this.props.results

    return (
        <div className="r2r-airhop">
            <R2RPlace place={results.places[hop.depPlace]} results={results}/>
            <R2RPlace place={results.places[hop.arrPlace]} results={results}/>
            <p>Departure terminal : {hop.depTerminal}</p>
            <p>Arrival terminal: {hop.arrTerminal}</p>
            <p>Flight: {hop.flight}</p>
            <p>Airline: <R2RAirline airline={results.airlines[hop.airline]} results={results}/></p>
        </div>
    )
  }

}

export default R2RAirhop;
