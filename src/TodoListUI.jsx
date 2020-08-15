import React from "react";

import { Input, Button, List } from "antd";

const TodoListUI = ({
  inputValue,
  list,
  handleInputChange,
  handleBtnClick,
  handleDeleteItem,
}) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <Input
        value={inputValue}
        style={{ width: "300px", marginRight: "10px" }}
        placeholder="Todo Info"
        onChange={handleInputChange}
      />
      <Button type="primary" onClick={handleBtnClick}>
        Submit
      </Button>
      <List
        style={{ width: "300px", marginTop: "10px" }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleDeleteItem(index)}>
            {item.title ? item.title : item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
