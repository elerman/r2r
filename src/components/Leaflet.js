import React, {Component} from 'react';

import L from 'leaflet'
import PolylineEncoded from 'polyline-encoded'
import css from '../styles/map.less'

import _ from 'underscore'

class Leaflet extends Component {

    constructor(props) {
        super(props)
        this.state = {initialized: false, map: null, }
        this.layers = []
        this.PolylineEncoded = PolylineEncoded
    }

    componentDidUpdate() {

        const loadRoute = (route) => {

            const cleanLayers = (layers)=>{
                if(layers.length>0) _.each(layers,(layer)=>{map.removeLayer(layer)})
            }            

            let map = (()=>{

                let map = this.state.initialized ? 
                                this.state.map : 
                                L.map('map')
                
                L
                    .tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiZWx' +
                        'lcm1hbiIsImEiOiJjajFyYXF0YzgwMDNkMndteTg0OGpoeGt3In0.Jc5z5mfc_FXG3ES3Kquw8A', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributor' +
                            's, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imager' +
                            'y © <a href="http://mapbox.com">Mapbox</a>',
                    id: 'mapbox.streets'
                })
                    .addTo(map);
                
                if(!this.state.initialized){
                    this.setState({initialized: true, map: map})
                }

                return map

            })()

            cleanLayers(this.layers) 
            this.layers = []

            var coords = []

            for(let s in route.segments){

                let segment = route.segments[s]

                if(segment.path){
                    let decoded = PolylineEncoded.decode(segment.path)
                    let polyline = L.polyline(decoded,{color: "#2BDA37", noClip: true}).addTo(map)

                    let orm = L.marker(decoded[0]).addTo(map)
                    let desm = L.marker(decoded[decoded.length-1]).addTo(map)

                    coords = [...coords, ...decoded]
                    this.layers = [orm,desm, polyline, ...this.layers]
                }else{
                
                    let or = [this.props.results.places[segment.depPlace].lat, this.props.results.places[segment.depPlace].lng]
                    let des = [this.props.results.places[segment.arrPlace].lat, this.props.results.places[segment.arrPlace].lng]
                    coords.push(or)
                    coords.push(des)

                    let orm = L.marker(or).addTo(map)
                    let desm = L.marker(des).addTo(map)

                    let polyline = L.polyline([or,des], {color: "#00B6CC", noClip: true}).addTo(map)

                    this.layers = [orm,desm,polyline, ...this.layers]
                }
            }
            map.fitBounds(coords)
        }

        if (!this.props.route) 
            loadRoute(this.props.results.routes[0])
        else 
            loadRoute(this.props.route)

    }

    render() {
        return (

            <div
                id="map"
                ref={(el) => {
                this.mapholder = el
            }}
                className={css.mapholder}></div>
        );
    }
}

export default Leaflet;