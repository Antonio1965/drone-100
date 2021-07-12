import React, { useState } from "react";



export const Counter = ({ value = 0, max = 5 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
    <div className='contador-ppal'>
      <h2 className='digital'> {counter} </h2>
      <button className="item-boton" onClick={handleAdd}>
        +
      </button>
      <button className="item-boton" onClick={handleSubtract}>
        -
      </button>
      </div>
    </>
  );
};


