import React, {Component} from 'react'
import R2RSegments from './R2RSegments'
import R2RPlace from './R2RPlace'

class R2RDetails extends Component {

    constructor(props){
        super(props)
        this.state = {segments: false}
        this.toggleSegments = this.toggleSegments.bind(this)
    }

    toggleSegments(evt){
        evt.stopPropagation()
        this.setState({segments: true})
    }

    render () {

        const segments = this.state.segments ? <R2RSegments segments={this.props.route.segments} results={this.props.results} />:null

        return (
            <div className="r2r-details">
                <div>Departure from: <R2RPlace place={this.props.results.places[this.props.route.depPlace]} /></div>
                <div>Arriving at: <R2RPlace place={this.props.results.places[this.props.route.arrPlace]} /></div>
                <p>Distance: {this.props.route.distance} km</p>
                <p>Total Duration (aprox.): {(this.props.route.totalDuration/60).toFixed(2)} hrs</p>
                <p>Avg. price: ${this.props.route.indicativePrices[0].price}</p>
                <button onClick={(evt)=>{this.toggleSegments(evt)}}>View Segments</button>
                {segments}
            </div>
        )
    }
}

export default R2RDetails