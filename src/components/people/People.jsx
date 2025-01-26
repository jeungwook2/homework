import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Btn from '../btn/Btn';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 773.5px;
  height: 374.47px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr ;
  z-index: 2;
  & > div > span{
    color: #049DD9;
    font-size: 30px;
    font-weight: 700;
  }
  & >div:nth-child(1){
    height: 80%;
    margin-top: 0px;
    border-bottom:1px solid #D9D9D9;
  }
  `;

  const InnerDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:1fr 1fr 1fr;
  `;

  const TitleDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: end;
    justify-items: center;

    &>div>span{
      font-size: 13px;
      color: #F20530;
    }
    &>div>h1{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &>div{
      display: flex;
      justify-content: center;
      align-items: end;
      width: 100%;
      height: 100%;
    }
  `;
  const CounterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;



  
const People = ({ isOpen, onClose }) => {
  const adult = useSelector((state) => state.adult.adultCnt);
  const child = useSelector((state) => state.child.childCnt);
  const baby = useSelector((state) => state.baby.cnt);
    const dispatch = useDispatch();
    if (!isOpen) return null;
    function ClickHandler(e){
      console.log(e.target.value);
      onClose();
    }

    return (
      <Overlay>
        <Modal>
          <div><span>인원을 선택해주세요.</span></div>
            <InnerDiv>
              <TitleDiv>
                <div></div>
                <div><span>24개월 ~ 12살</span></div>
                <div><span>24개월 미만</span></div>
              </TitleDiv>
              <TitleDiv>
                <div><h1>성인</h1></div>
                <div><h1>아동</h1></div>
                <div><h1>영아</h1></div>
              </TitleDiv>
              <TitleDiv>
              <CounterDiv><Btn str="+"
                f={() => {
                  dispatch({ type: 'INCREMENT_ADULT' });
                }}></Btn>
                {adult}
                <Btn str="-"
                f={() => {
                  dispatch({ type: 'DECREMENT_ADULT' });
                }}></Btn>
                </CounterDiv>
                <CounterDiv><Btn str="+"
                f={() => {
                  dispatch({ type: 'INCREMENT_CHILD' });
                }}></Btn>
                {child}
                <Btn str="-"
                f={() => {
                  dispatch({ type: 'DECREMENT_CHILD' });
                }}></Btn>
                </CounterDiv>
                <CounterDiv><Btn str="+"
                f={() => {
                  dispatch({ type: 'INCREMENT_BABY' });
                }}></Btn>
                {baby}
                <Btn str="-"
                f={() => {
                  dispatch({ type: 'DECREMENT_BABY' });
                }}></Btn>
                </CounterDiv>
              </TitleDiv>
              
            </InnerDiv>
          <div><button onClick={onClose}>모달 닫기</button></div>
        </Modal>
      </Overlay>
    );
  };
export default People;