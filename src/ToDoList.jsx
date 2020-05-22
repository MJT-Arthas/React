import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div>
        <div style={{ margin: 10 }}>
          <Input
            value={this.state.inputValue}
            placeholder="Todo Info"
            style={{ width: 300, marginRight: 10 }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: 370, marginLeft: 10 }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.delList.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value,
    };
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleClick() {
    const action = {
      type: ADD_TODO_ITEM,
    };
    store.dispatch(action);
  }
  delList(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index,
    };
    store.dispatch(action);
  }
}
