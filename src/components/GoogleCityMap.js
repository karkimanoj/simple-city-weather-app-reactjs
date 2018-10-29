import React, { Component } from 'react';
//global variable
const google = window.google;

export default class GoogleCityMap extends Component {

	componentDidMount () {
		const {lat, lng} = this.props;
		new google.maps.Map(this.refs.map, {
			zoom: 12, 
			center: {lat: lat, lng: lng}
		});		 
	}
	

	render () {

		const mapStyle = {
			height : 200 ,
			width: 300
		}
		return (
			<div ref='map' style={mapStyle}/>
		);
	}
}