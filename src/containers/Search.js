import React from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {search} from '../actions/index'

import R2RAutocomplete from '../components/R2RAutocomplete'

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
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="from" value={this.state.oName} onChange={(evt)=>{this.handleSearch(evt,'oName')}} />
                <input type="text" className="form-control" placeholder="to" value={this.state.dName} onChange={(evt)=>{this.handleSearch(evt,'dName')}} />
                <R2RAutocomplete />
                <button type="submit">Find</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        find: search
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(Search);
