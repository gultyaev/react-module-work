const initialState = {
	isLoading: false,
	data: [
		{
			content: 'Hello everyone',
			date: '20 Mar 15:30',
			avatar: '//lorempixel.com/100/100',
			name: 'Elis'
		},
		{
			content: 'Hi',
			date: '19 Mar 23:30',
			avatar: '//lorempixel.com/100/100',
			name: 'Someone'
		},
		{
			content: 'I\'m boring',
			date: '19 Mar 23:00',
			avatar: '//lorempixel.com/100/100',
			name: 'David'
		},
		{
			content: 'Ooops',
			date: '18 Mar 00:01',
			avatar: '//lorempixel.com/100/100',
			name: 'Harry'
		},
		{
			content: 'OMG',
			date: '17 Mar 10:22',
			avatar: '//lorempixel.com/100/100',
			name: 'Lisa'
		}
	],
	showCount: 2
};

const feedbackReducer = function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'USER_PRESSED_BUTTON_MORE':
			return {
				...state,
				isLoading: true
			};

		case 'TIME_IS_ENDED':
			return {
				...state,
				isLoading: false
			};

		default:
			return state;
	}
};

export default feedbackReducer;