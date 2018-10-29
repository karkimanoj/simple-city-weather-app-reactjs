import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
	
	constructor (props) {
		super(props);
		this.initialState = { searchTerm : '' };
		this.state = this.initialState;

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormsubmit = this.onFormsubmit.bind(this);
		console.log(fetchWeather);
	}
	
	onInputChange (e) {
		this.setState({ searchTerm: e.target.value});
	}

	onFormsubmit (e) {
		e.preventDefault();
		//fetch weather data
		this.props.fetchWeather(this.state.searchTerm);
		this.setState({ searchTerm : ''});
	}

	render () {
		return (
			<div className='col-md-8 offset-md-2 mt-3' >
				<form onSubmit={this.onFormsubmit} className='input-group mb-3'>
					<input type="text" placeholder='type a city name like New york' value = {this.state.searchTerm} onChange={this.onInputChange} className="form-control"  aria-label="search" />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="submit" >search</button>
					</div>
				</form>
			</div>
		);
	}
} 

const mapDispatchToProps = (dispatch) =>  {
	return bindActionCreators({ fetchWeather : fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);