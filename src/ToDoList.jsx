import React, { Component } from "react";
import "antd/dist/antd.css";



import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction,
  getToDList,
  
} from "./store/actionCreators";
import ToListUI from "./ToListUI";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.delList = this.delList.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <ToListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        delList={this.delList}
      />
    );
  }

  componentDidMount() {
    const action =getToDList()
    store.dispatch(action);
    // console.log(action)
    // axios
		// .get("/list.json")
		// .then((res) => {
		// 	alert("success");
    //   const data = res.data;
    //   // console.log(res.data);
    //   const action = initItemAction(data)
    //   // console.log(action);
    //   // console.log(action.data);
    //   store.dispatch(action);
		// })
		// .catch(() => {
    //   alert("error");
		// });
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  delList(index) {
    const action = getDelItemAction(index);
    store.dispatch(action);
  }
}
