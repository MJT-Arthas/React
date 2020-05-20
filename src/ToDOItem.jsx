import React, { Component } from "react";

export default class ToDOItem extends Component {
  constructor(props) {
    super(props);
    this.delList = this.delList.bind(this);
	}
  render() {
		const { content } = this.props;
    return <div onClick={this.delList}>
			{content}
			</div>;
  }
  delList() {
    // this.props.delList(this.props.index);
    // 解构
    const { delList, index } = this.props;
    delList(index);
  }
}
