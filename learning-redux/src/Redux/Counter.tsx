import { decrement, increment, incrementByAmount } from "./CounterSlice";
import { AppDispach, RootState } from "./Stores";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispach>();
  return (
    <div>
      Counter
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>Pro Max</button>
    </div>
  );
}

export default Counter;
