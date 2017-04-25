const FeedbackActions = {
	userPressedMore() {
		return dispatch => {
			dispatch({type: "USER_PRESSED_BUTTON_MORE"});

			setTimeout(() => {
				dispatch({type: "TIME_IS_ENDED"})
			}, 2000)
		}
	},
	userPressedAddBtn(obj) {

		return dispatch => {
			dispatch({type: "ADD_PRESSED"});
			setTimeout(()=>{
				dispatch({
					type: "ITEM_ADDED",
					payload: obj
				});
			},3000)
		}
	}
};

export default FeedbackActions;