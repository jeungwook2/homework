import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from '../calendal/Calendal';
import Area from '../area/Area';
import People from '../people/People';

const LayoutDiv =styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 3fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
`;


const Display = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

 
  const openModal1 = () => setIsModal1Open(true);
  const closeModal1 = () => setIsModal1Open(false);

  const openModal2 = () => setIsModal2Open(true);
  const closeModal2 = () => setIsModal2Open(false);



 

  return (
    <LayoutDiv>
      <div>1</div>
      <Calendar></Calendar>
      <div>
      <button onClick={openModal1}>모달1 열기</button>
      <Area isOpen={isModal1Open} onClose={closeModal1} />
      </div>
      
      <div>
        <button onClick={openModal2}>모달2 열기</button>
        <People isOpen={isModal2Open} onClose={closeModal2} />
      </div>
      <div>5</div>
    </LayoutDiv>
  );
};

export default Display;