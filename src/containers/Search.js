import React from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import R2RAutocomplete from './R2RAutocomplete'
import R2RPlace from '../components/R2RPlace'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { oName: '' , dName: ''}
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.find(this.state.oName, this.state.dName)
    }

    handleSearch(evt, attr) {
        this.setState({ [attr]: evt.target.value })
    }


    render() {

        const origin = this.props.oPlace ? <R2RPlace place={this.props.oPlace} />:null
        const destination = this.props.dPlace ? <R2RPlace place={this.props.dPlace} />:null

        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <R2RAutocomplete param="oPlace"/>
                <R2RAutocomplete param="dPlace"/>
                {origin}
                {destination}
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        oPlace: state.searchReducer.oPlace,
        dPlace: state.searchReducer.dPlace
    }
}

export default connect(mapStateToProps)(Search)
