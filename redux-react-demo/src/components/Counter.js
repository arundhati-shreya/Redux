import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
   const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler =()=>{
    dispatch({type:'increment'});
  }
  const decrementHandler =()=>{
    dispatch({type:'decrement'})
  }
  const incrementHandlerby5 =()=>{
    dispatch({ type: 'incrementBy', value: 5 });
  }
  const decrementHandlerby5 =()=>{
    dispatch({ type: 'decrementBy', value: 5 });
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <br/>
        <button onClick={incrementHandlerby5}>Increment By 5</button>
        <button onClick={decrementHandlerby5}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;