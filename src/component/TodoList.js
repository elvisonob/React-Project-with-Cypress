import React, { useState } from 'react';

const TodoList = (props) => {
  return (
    <div>
      <ul className="array-List">
        {props.onListItem.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
