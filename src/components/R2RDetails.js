import React, {Component} from 'react'

class R2RDetails extends Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                {this.props.route.name}{this.props.results.places[this.props.route.arrPlace].shortName}
            </div>
        )
    }
}

export default R2RDetails