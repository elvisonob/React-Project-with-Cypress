import React, { Fragment, useState } from 'react';
import Form from './Form.js';
import TodoList from './TodoList.js';

const App = () => {
  const [listItem, setListItem] = useState([]);

  const newArrayList = (item) => {
    setListItem((prevList) => {
      return [{ id: Math.random(), item: item }, ...prevList];
    });
  };
  return (
    <Fragment>
      <Form onAddItem={newArrayList} />
      <TodoList onListItem={listItem} />
    </Fragment>
  );
};

export default App;
