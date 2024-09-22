import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus, countSumma } from "../redux/counterSlice";
import Button from "../../Todo-2/components/Button";

const Counter2 = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const clickPlus = () => {
    dispatch(countPlus());
  };
  const clickMinus = () => {
    dispatch(countMinus());
  };
  const clickSumma = () => {
    dispatch(countSumma());
  };

  return (
    <>
      <div>Сумма: {counter.summa}</div>
      <div>Счетчик: {counter.count}</div>
      <Button handlerClick={clickPlus}>PLUS</Button>
      <Button handlerClick={clickMinus}>MINUS</Button>
      <Button handlerClick={clickSumma}>SUMMA</Button>
    </>
  );
};

export default Counter2;
