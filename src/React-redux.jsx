import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction,
  initItemAction,
} from "./store/actionCreators";

class ReactRedux extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = store.getState();
  // }
  render() {
    const {
      inputValue,
      list,
      handleInputChange,
      handleClick,
      liClick,
    } = this.props;
    return (
      <div>
        <div>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li
                onClick={() => {
                  liClick(index);
                }}
                key={index}
              >
                {" "}
                {item}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  // componentDidMount() {
  //   axios
  //       .get("/list.json")
  //       .then((res) => {
  //         alert("success");
  //         console.log(res.data);
  //         const data = res.data;
  //         const action = initItemAction(data);
  //         console.log(action)
  //         // dispatch(action);
  //       })
  //       .catch(() => {
  //         alert("error");
  //       });
  // }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = getAddItemAction();
      dispatch(action);
    },
    liClick(index) {
      const action = getDelItemAction(index);
      dispatch(action);
    },
    componentDidMount() {
      alert('123')},
      // axios
      //   .get("/list.json")
      //   .then((res) => {
      //     alert("success");
      //     console.log(res.data);
      //     const data = res.data;
      //     const action = initItemAction(data);
      //     console.log(action)
      //     dispatch(action);
      //   })
      //   .catch(() => {
      //     alert("error");
      //   });
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);
