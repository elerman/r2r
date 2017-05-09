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
        let toggle = this.state.segments
        this.setState({segments: !toggle })
    }

    render () {

        const segments = this.state.segments ? <R2RSegments segments={this.props.route.segments} results={this.props.results} />:null

        return (
            <div className="r2r-details">
                <div>From: <R2RPlace place={this.props.results.places[this.props.route.depPlace]} /></div>
                <div>To: <R2RPlace place={this.props.results.places[this.props.route.arrPlace]} /></div>
                <p>Distance: {this.props.route.distance} km</p>
                <p>Aprox. Duration: {(this.props.route.totalDuration/60).toFixed(2)} hrs</p>
                <p>Avg. Price: ${this.props.route.indicativePrices[0].price}</p>
                <button className="btn btn-sm" onClick={(evt)=>{this.toggleSegments(evt)}}>View Segments</button>
                {segments}
            </div>
        )
    }
}

export default R2RDetails