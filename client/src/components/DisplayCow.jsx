import React from 'react';

const DisplayCow = (props) => {
  return (
    <div>
      <strong>{props.cow.name}</strong>
      <p>{props.cow.desc}</p>
      <button onClick={props.close}>close</button>
    </div>
  )
}

export default DisplayCow;