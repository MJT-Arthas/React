import React, { Component } from "React";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

export default class ToListUI extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: 10 }}>
          <Input
            value={this.props.inputValue}
            placeholder="Todo Info"
            style={{ width: 300, marginRight: 10 }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: 370, marginLeft: 10 }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                return this.props.delList(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
