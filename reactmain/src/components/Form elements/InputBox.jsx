import React, { useState } from 'react';
function InputBox(props) {
  return (
    <>
      <label htmlFor='Plot area'>Plot Area</label>
      <input
        className='w3-input w3-border'
        type={props.type}
        placeholder={props.defaultValue}
        name={props.name}
        id={props.id}
        defaultValue={props.defaultValue}
        onChange={(event) => {
          props.onChangeSetState(event.target.id, event.target.value);
        }}
      />
    </>
  );
}

export default InputBox;
