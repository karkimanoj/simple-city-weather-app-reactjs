import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
  weathers: WeatherReducer
});

export default rootReducer;

