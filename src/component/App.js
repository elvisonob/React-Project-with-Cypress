import React, { Fragment } from 'react';
import Form from './Form.js';
import TodoList from './TodoList.js';

const App = () => {
  return (
    <Fragment>
      <Form />
      <TodoList />
    </Fragment>
  );
};

export default App;
