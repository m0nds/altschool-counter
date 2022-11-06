import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        count: 0,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increaseValue = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decreaseValue = () => {
    dispatch({ type: "DECREMENT" });
  };

  const resetValue = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <main>
      <div class="container">
        <h1>COUNTER</h1>
        <span className={state.count < 0 ? "red" : "green"} id="value">
          {state.count}
        </span>
        <div class="button-container">
          <button onClick={decreaseValue} className="btn">
            decrease
          </button>
          <button onClick={resetValue} className="btn">
            reset
          </button>
          <button onClick={increaseValue} className="btn">
            increase
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
