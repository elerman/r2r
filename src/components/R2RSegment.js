import React, { Component } from 'react'
import R2RPlace from './R2RPlace'
import R2RSegmentAir from './R2RSegmentAir'
import R2RSegmentSurface from './R2RSegmentSurface'
import Icon from './Icon'

class R2RSegment extends Component {

    constructor(props){
        super(props)
    }

    render () {

        const typeDetails = this.props.segment.segmentKind=='air'?
        <R2RSegmentAir segment={this.props.segment} results={this.props.results} />:
        <R2RSegmentSurface segment={this.props.segment} results={this.props.results} />
        
        return (
            <div className="r2r-segment">
                <p>Kind: {this.props.segment.segmentKind} <Icon name={this.props.results.vehicles[this.props.segment.vehicle].name.toLowerCase()} /></p>
                <p>{this.props.segment.vehicle} {this.props.results.vehicles[this.props.segment.vehicle].name}</p>
                <R2RPlace place={this.props.results.places[this.props.segment.depPlace]} />
                <R2RPlace place={this.props.results.places[this.props.segment.arrPlace]} />
                <p>Distance: {this.props.segment.distance} km</p>
                {typeDetails}
            </div>
        )
    }
}

export default R2RSegment