import React, { Component } from "react";

import TodoListUI from "./TodoListUI";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList,
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // });
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  render() {
    const { inputValue, list } = this.state;
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }
}

export default TodoList;
