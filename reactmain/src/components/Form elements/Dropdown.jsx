import React, { useState } from 'react';
function Dropdown(props) {
  return (
    <select
      name={props.name}
      id={props.id}
      onChange={(event) => {
        console.log(event);
        props.onChangeSetState(event.target.id, event.target.value);
      }}
    >
      {props.options.map((element, key) => (
        <option value={element} key={key}>
          {element}
        </option>
      ))}
    </select>
  );
}
export default Dropdown;
