import { RootState, useAppDispatch } from "store";
import { useSelector } from "react-redux";
import {
  increment,
  decrement,
  incremetByValue,
} from "store/slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.count);

  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByValueHandler = (value: number) => {
    dispatch(incremetByValue(value));
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrementHandler}>++</button>
      <button onClick={decrementHandler}>--</button>
      <button onClick={() => incrementByValueHandler(5)}>+5</button>
    </>
  );
};

export default Counter;
