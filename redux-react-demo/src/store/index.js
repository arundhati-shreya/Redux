import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 2,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 2,
    };
  }
  if (action.type === 'incrementBy') {
    return {
      counter: state.counter + action.value,
    };
  }

  if (action.type === 'decrementBy') {
    return {
      counter: state.counter - action.value,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;