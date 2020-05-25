import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_ITEM_ACTION,GET_TODO_LIST } from './actionTypes'
// import axios from "axios";

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM,
})

export const getDelItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
})

export const initItemAction = (data) => ({
	type: INIT_ITEM_ACTION,
	data
})

export const getToDList = () => ({
	type: GET_TODO_LIST,
})


// return (dispatch) => {
// 	axios
// 		.get("/list.json")
// 		.then((res) => {
// 			alert("success");
// 			console.log(res.data);
// 			const data = res.data;
// 			const action = initItemAction(data)
// 			dispatch(action)
// 		})
// 		.catch(() => {
// 			alert("error");
// 		});
// }