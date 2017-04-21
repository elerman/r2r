import React from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {fireSearch} from '../actions/Search'
import R2RAutocomplete from './R2RAutocomplete'
import R2RPlace from '../components/R2RPlace'


import css from '../styles/search.less'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.search()
    }

    render() {

        const origin = this.props.oPlace ? <R2RPlace place={this.props.oPlace} />:null
        const destination = this.props.dPlace ? <R2RPlace place={this.props.dPlace} />:null
        const submit = this.props.oPlace && this.props.dPlace ? (
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Find!</button>
            </div>
        ): null
        
        return (

            <div className="row justify-content-center">
                <div className="col col-md-6">
                    <section className={css.search}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <R2RAutocomplete param="oPlace" placeholder="Origin location"/>
                            </div>
                            <div className="form-group">
                                <R2RAutocomplete param="dPlace" placeholder="Your destination"/>
                            </div>
                            {submit}
                        </form>
                        {origin}
                        {destination}
                    </section>  
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        oPlace: state.searchReducer.oPlace,
        dPlace: state.searchReducer.dPlace
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        search: fireSearch
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
