import React, { useState } from 'react';

const TodoList = (props) => {
  const { onRemove } = props;
  return (
    <div>
      <ul className="array-List">
        {props.onListItem.map((list) => (
          <li className="list-item" key={list.id}>
            {list.item}
            <button
              className="delete-button"
              onClick={onRemove.bind(null, list.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
