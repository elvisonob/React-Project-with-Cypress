import React, { useState } from 'react';

const TodoList = (props) => {
  const onRemoveToDo = (product) => {
    props.onListItem.filter((list) => list.id !== product.id);
  };
  return (
    <div>
      <ul className="array-List">
        {props.onListItem.map((list) => (
          <li key={list.id} onClick={onRemoveToDo.bind(id)}>
            {list.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
