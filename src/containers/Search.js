import React from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {search} from '../actions/Search'
import R2RAutocomplete from './R2RAutocomplete'
import R2RPlace from '../components/R2RPlace'
import Loader from '../components/Loader'

import css from '../styles/search.less'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.search(this.props.oPlace, this.props.dPlace)
    }

    render() {

        const origin = this.props.oPlace ? <R2RPlace place={this.props.oPlace} />:null
        const destination = this.props.dPlace ? <R2RPlace place={this.props.dPlace} />:null
        const submit = this.props.oPlace && this.props.dPlace ? <input type="submit" /> : null
        const loader = this.props.loading ? <Loader />: null
        return (
            <section className={css.search}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <R2RAutocomplete param="oPlace"/>
                    </div>
                    <div className="form-group">
                        <R2RAutocomplete param="dPlace"/>
                    </div>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        oPlace: state.searchReducer.oPlace,
        dPlace: state.searchReducer.dPlace,
        loading: state.searchReducer.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        search: search
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
