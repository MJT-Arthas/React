import React, { Component, Fragment } from "react";
import "./style.css";
import ToDOItem from "./ToDOItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Hello",
      list: [],
    };
    this.txtChange = this.txtChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.liClick = this.liClick.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="输入框">输入框：</label>
          <input
            id="输入框"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.txtChange}
          />
          <button onClick={this.btnClick}>按钮</button>
        </div>
        <ul>{this.getToDoItem()}</ul>
      </Fragment>
    );
  }
  getToDoItem() {
    return this.state.list.map((item, index) => {
      return (
        // <li
        //   key={index}
        //   onClick={this.liClick.bind(this, index)}
        //   dangerouslySetInnerHTML={{ __html: item }}
        // ></li>
        <ToDOItem
          key={index}
          content={item}
          index={index}
          delList={this.liClick}
        >
          {" "}
        </ToDOItem>
      );
    });
  }
  txtChange(e) {
    const newValue = e.target.value;
    this.setState(() => ({
      inputValue: newValue,
    }));
  }
  // btnClick() {
  //   this.setState({
  //     list: [...this.state.list, this.state.inputValue],
  //     inputValue: "",
  //   });
  // }

  btnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: "",
    }));
  }

  // liClick = (index)=> {
  //   const list = [...this.state.list];
  //   list.splice(index, 1);
  //   this.setState({
  //     list: list,
  //   });
  // }

  liClick = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  };
}
