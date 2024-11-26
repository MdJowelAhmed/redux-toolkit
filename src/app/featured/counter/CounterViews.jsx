import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";

const CounterViews = () => {
    const count =useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return <div>
    <h1 className="text-4xl ">count: {count}</h1>
    <button className="btn " onClick={()=>{dispatch(increment())}}>Increment</button>
    <button className="btn mx-4" onClick={()=>{dispatch(decrement())}}>decrement</button>
    <button className="btn " onClick={()=>{dispatch(reset())}}>reset</button>
  </div>;
};

export default CounterViews;
