const FeedbackActions = {
	userPressedMore() {
		return dispatch => {
			dispatch({type: "USER_PRESSED_BUTTON_MORE"});

			setTimeout(() => {
				dispatch({type: "TIME_IS_ENDED"})
			}, 2000)
		}
	}
};

export default FeedbackActions;