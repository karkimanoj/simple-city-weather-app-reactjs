import axios from 'axios';

const API_KEY ='b66cf267b7b4382051c5ef85411ac9f6';
// openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const Fetch_Weather = 'Fetch_Weather';

export function fetchWeather (city) {
	const request = axios.get(`${ROOT_URL}&q=${city},us`); //request return a promise
	return ({
		type : Fetch_Weather,
		payload : request
	});
}