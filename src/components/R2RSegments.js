import React, { Component } from 'react'
import R2RSegment from './R2RSegment'

class R2RSegments extends Component {

    constructor(props){
        super(props)
    }

    render () {

        const list = this.props.segments.map((seg,index)=>{
            return <li key={index}><R2RSegment segment={seg} results={this.props.results} /></li>
        })

        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default R2RSegments