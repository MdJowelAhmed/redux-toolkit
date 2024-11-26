import { useDispatch, useSelector } from "react-redux";
import { increment } from "./CounterSlice";

const CounterViews = () => {
    const count =useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return <div>
    <h1>count: {count}</h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
  </div>;
};

export default CounterViews;
