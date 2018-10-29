export default function (state = [], action) {
	//console.log('action : ',action);
	switch (action.type) {
		case 'Fetch_Weather' :
			return [action.payload.data, ...state];
			break;
		default : 
			return state;	
	}
	
}