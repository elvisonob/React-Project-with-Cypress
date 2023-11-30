import React, { useState } from 'react';

const Form = (props) => {
  const [formDetails, setFormDetails] = useState('');

  const onChangeHandler = (event) => {
    setFormDetails(event.target.value);
  };

  const onSubmittingForm = (event) => {
    event.preventDefault();

    props.onAddItem(formDetails);
    setFormDetails('');
  };

  return (
    <div>
      <form>
        <div className="input-form">
          <label htmlFor="name">Add your To Do List</label>
          <br />
          <input
            onChange={onChangeHandler}
            value={formDetails}
            type="text"
            id="list"
          />
        </div>
      </form>

      <button onClick={onSubmittingForm}>Enter</button>
    </div>
  );
};

export default Form;
