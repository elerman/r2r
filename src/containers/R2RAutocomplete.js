import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {searchParam} from '../actions/Search'

import css from '../styles/autocomplete.less'

import jquery from 'jquery'
import typeahead from 'typeahead.js/dist/typeahead.jquery'
import Bloodhound from 'typeahead.js/dist/bloodhound'

class R2RAutocomplete extends Component {

    constructor(props) {
        super(props)
        this.state = {
            place: null,
            bloodhound: null
        }
        this.startBloodhound = this
            .startBloodhound
            .bind(this)
    }

    startBloodhound(cbk) {
        let hound = new Bloodhound({
            datumTokenizer: Bloodhound
                .tokenizers
                .obj
                .whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: 'http://free.rome2rio.com/api/1.4/json/Autocomplete?key=xeOAhXI4&query=%QUERY',
                wildcard: '%QUERY',
                transform: (response) => {
                    return response.places
                }
            }
        });
        this.setState({
            bloodhound: hound
        }, cbk)
    }

    componentDidMount() {
        let ji = jquery(this.input)
        this.startBloodhound(() => {
            ji.typeahead(null, {
                name: 'r2r-suggestions',
                display: (val) => {
                    return val.shortName
                },
                source: this.state.bloodhound
            })

            ji.bind('typeahead:select', (ev, place)=>{
                this.props.searchParam(place,this.props.param)
            })
        })
    }

    render() {
        return (
            <div className={css.r2rAutocomplete}>
                <input
                    type="text"
                    className="form-control"
                    placeholder={this.props.placeholder}
                    ref={(input) => {
                    this.input = input
                }}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({searchParam: searchParam}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {
        place : state.searchReducer[ownProps.param]
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(R2RAutocomplete)