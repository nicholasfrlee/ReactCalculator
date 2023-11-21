import { ACTIONS } from './App';

// Destructure `dispatch` and `digit` from props directly
export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
}