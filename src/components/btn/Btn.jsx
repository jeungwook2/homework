import React from 'react';

const Btn = ({f,str}) => {
  return (
    <>
      <button onClick={f}>{str}</button>
    </>
  );
};

export default Btn;