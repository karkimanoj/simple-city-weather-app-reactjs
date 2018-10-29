import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

const average = data => (_.round(_.sum(data)/data.length)) ;

export default ({data, color, units}) => {
	return (
		<React.Fragment>
		<Sparklines height={120} width={180} data={data}>
			<SparklinesLine color={color} />
			<SparklinesReferenceLine type="avg" /> 
			
		</Sparklines>
		<h5>{average(data)+' '+units} </h5>
		</React.Fragment>
	);
}

//export default Chart;