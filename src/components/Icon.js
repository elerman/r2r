import React, {Component} from 'react'

class Icon extends Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <i className={`fa fa-${this.props.name}`}/>
        )
    }
}

export default Icon