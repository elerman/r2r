import React, { Component } from 'react';
import jquery from 'jquery'
import L from 'leaflet'
import css from '../styles/map.less'


class Leaflet extends Component {

    componentDidMount() {
        let jel = jquery(this.mapholder)
        let map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiZWxlcm1hbiIsImEiOiJjajFyYXF0YzgwMDNkMndteTg0OGpoeGt3In0.Jc5z5mfc_FXG3ES3Kquw8A', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
        }).addTo(map);

    }

    render() {
        return (
            <div id="map"  ref={(el) => { this.mapholder = el }} className={css.mapholder}>
                
            </div>
        );
    }
}

export default Leaflet;