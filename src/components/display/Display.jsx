import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from '../calendal/Calendal';
import Area from '../area/Area';
import People from '../people/People';

const LayoutDiv =styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 600px 1fr ;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;

  & >div> button{
    width: 166px;
    height: 50px;
    border: none;
    background-color: white;
   
  }
`;
  const BtnDiv =styled.div`
    width: 600px;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr;
    justify-content: center;
    align-items: center;
    border: 1px solid #049DD9;
    border-radius: 20px;
    color: #202020;
    

    & >div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    & >div > button{
      width: 85%;
      height: 100%;
      background-color: white;
      border: none;
    }
    &>div:nth-child(2){
      border-left: 1px solid #049DD9;
      border-right: 1px solid #049DD9;
    }
  `;


const Display = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

 
  const openModal1 = () => setIsModal1Open(true);
  const closeModal1 = () => setIsModal1Open(false);

  const openModal2 = () => setIsModal2Open(true);
  const closeModal2 = () => setIsModal2Open(false);



 

  return (
    <>
    <div>123</div>
    <LayoutDiv>
      <div></div>
      <BtnDiv>
      <div>
      <Calendar></Calendar>
      </div>
      <div>
      <button onClick={openModal1}>모달1 열기</button>
      <Area isOpen={isModal1Open} onClose={closeModal1} />
      </div>
      <div>
        <button onClick={openModal2}>모달2 열기</button>
        <People isOpen={isModal2Open} onClose={closeModal2} />
      </div>
      </BtnDiv>
      <div></div>
    </LayoutDiv>
    </>
  );
};

export default Display;