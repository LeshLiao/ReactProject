import { useReducer } from 'react';

export default function UseReducerEx() {
  // initial state
  const initialState = {
    counter: 0
  };

  interface State {
    counter: number;
  }

  interface Action {
    type: string;
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  const actionIncrease: Action = {
    type: 'increase'
  };

  const actionDecrease: Action = {
    type: 'decrease'
  };

  function reducer(state:State, action:Action) {
    let newState;
    switch (action.type) {
      case 'increase':
        newState = { counter: state.counter + 1};
        break;
      case 'decrease':
        newState = { counter: state.counter - 1};
        break;

      default:
        newState = state;
    }

    return newState;
  }

  return (
    <>
      <h1>UseReducerEx</h1>
      <button onClick={() => dispatch(actionIncrease)}>
        Click me +1
      </button>
      <br></br>
      <button onClick={() => dispatch(actionDecrease)}>
        Click me -1
      </button>
      <h3>{state.counter}</h3>
    </>
  );
}