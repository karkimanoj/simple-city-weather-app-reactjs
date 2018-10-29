import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleCityMap from '../components/GoogleCityMap';

const TableRow = ({weather}) => {
	const {lat, lon} = weather.city.coord;
	const temps = weather.list.map(item => item.main.temp);
	const pressures = weather.list.map(item => item.main.pressure);
	const humidities = weather.list.map(item => item.main.humidity);
	//console.log(humiditys);

	return (
		<tr>
			<th scope='row'> <GoogleCityMap lat={lat} lng={lon}/> </th>
			<td className='td-chart'>
				<Chart data={temps} color='blue' units='K'/>
			</td>
			<td className='td-chart'>
				<Chart data={pressures} color='green' units='hPa'/>
			</td>
			<td className='td-chart'>
				<Chart data={humidities} color='red' units='%'/>
			</td>
		</tr>
	);
}

class WeatherTable extends Component {

	render (){
//<TableRow weathers={this.props.weathers} />
		return (
			<table className='col-md-10 offset-md-1  table table-hover'> 
				<thead>
					<tr>
						<th> City </th>
						<th> Temperature </th>
						<th> Pressure </th>
						<th> Humidity </th>
					</tr>	
				</thead>
				<tbody>
					{ 
						this.props.weathers.map( weather => 
							<TableRow key={weather.city.name} weather={weather} /> ) 
					}
					
				</tbody>
			</table>
		);
	}

}

const mapStateToProps = ({weathers}) => ({ weathers }) ;

export default connect(mapStateToProps) (WeatherTable);