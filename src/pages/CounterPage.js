import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3 w-5/6">
      <h1 className="text-lg">
        Count is:
        <span className="m-2 font-bold">{state.count}</span>
      </h1>
      <div className="flex flex-row">
        <Button
          success
          className="m-2 border border-green-900"
          onClick={handleIncrement}
        >
          Increment
        </Button>
        <Button
          danger
          className="m-2 border border-green-900"
          onClick={handleDecrement}
        >
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Add a lot!</label>
          <input
            value={state.valueToAdd || ""}
            onChange={handleChange}
            type="number"
            className="m-3 w-40 border border-gray-300 bg-gray-50 p-1"
          />
        </div>
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
