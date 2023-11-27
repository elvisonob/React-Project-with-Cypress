import React, { useState } from 'react';

const Form = () => {
  const [formDetails, setFormDetails] = useState('');

  const onChangeHandler = (event) => {
    setFormDetails(event.target.value);
  };

  const onSubmittingForm = (event) => {
    event.preventDefault();
    console.log(formDetails);
    setFormDetails('');
  };

  return (
    <div>
      <form onSubmit={onSubmittingForm}>
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
      <button onSubmit={onSubmittingForm}>Enter</button>
    </div>
  );
};

export default Form;
