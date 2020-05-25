import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_ITEM_ACTION } from './actionTypes'


const defaultState = {
	inputValue: '123',
	list: [
		"Racing car sprays burning fuel into crowd.",
		"Japanese princess to wed commoner.",

	]
}

export default (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value
		return newState
	}
	if (action.type === INIT_ITEM_ACTION) {
		const newState = JSON.parse(JSON.stringify(state));
		console.log(action)
		console.log(action.data)
		newState.list = action.data
		console.log(newState)
		return newState
	}

	if (action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		if (newState.inputValue.trim() === "") {//判断输入空的
			newState.inputValue = ''
			return newState;
		}
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}

	if (action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState
	}


	return state;
}