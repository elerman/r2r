import React, {Component} from 'react';

import Autocomplete from 'react-autocomplete'
import R2RPlace from './R2RPlace'
import css from './styles/autocomplete.less'

class R2RAutocomplete extends Component {

    constructor(props){
        super(props)
        this.state = {places: [], value:'', loading: false}
        this.autocomplete = this.autocomplete.bind(this)
    }

    autocomplete(val){
        this.setState({loading:true})
        let api = `http://free.rome2rio.com/api/1.4/json/Autocomplete?key=xeOAhXI4&query=${val}`
        return fetch(api)
            .then(response => response.json())
            .then(json => {this.state.places = json.places; this.setState({loading:false})})
    }

    render() {
        return (
            <div className="r2r-autocomplete">
                <Autocomplete 
                    value={this.state.value}
                    items={this.state.places}
                    renderItem={(item,isHighlighted)=>{
                        console.log('render item')
                        console.log(isHighlighted)
                        const itemClass = (highlighted)=>{
                            return "autocomplete-item"+(highlighted?'highlighted':'')
                        }
                        return <div className={itemClass()}><R2RPlace place={item} /></div>
                    }}
                    onChange={(ev, val)=>{
                        this.setState({value:val})
                        if(val.length>=3 && !this.state.loading)
                            this.autocomplete(val)
                    }}
                    getItemValue={(place)=>{
                        console.log("get value")
                        console.log(place)
                        return place.shortName
                    }}
                    onSelect={(val,item)=>{
                        console.log('onSelect') 
                        console.log(val, item)
                    }}
                />
            </div>
        );
    }
}

export default R2RAutocomplete;