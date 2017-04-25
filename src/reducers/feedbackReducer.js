const initialState = {
	isLoading: false,
	data: [
		{
			feedback: 'Hello everyone',
			date: '20 Mar 15:30',
			avatar: '//lorempixel.com/100/100',
			name: 'Elis'
		},
		{
			feedback: 'Hi',
			date: '19 Mar 23:30',
			avatar: '//lorempixel.com/100/100',
			name: 'Someone'
		},
		{
			feedback: 'I\'m boring',
			date: '19 Mar 23:00',
			avatar: '//lorempixel.com/100/100',
			name: 'David'
		},
		{
			feedback: 'Ooops',
			date: '18 Mar 00:01',
			avatar: '//lorempixel.com/100/100',
			name: 'Harry'
		},
		{
			feedback: 'OMG',
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
			let oldCount = state.showCount,
				newCount = oldCount + 2,
				count = null;

			if (newCount < state.data.length) {
				count = newCount;
			} else {
				count = state.data.length;
			}

			state.showCount = count;

			return {
				...state,
				isLoading: false
			};

		case 'ADD_PRESSED':
			return {
				...state,
				isLoading: true
			};

		case 'ITEM_ADDED':
			state.data.unshift(payload);
			let addCount = state.showCount+1;

			return {
				...state,
				showCount: addCount,
				isLoading: false
			};

		default:
			return state;
	}
};

export default feedbackReducer;