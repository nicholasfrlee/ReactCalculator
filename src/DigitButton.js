import { ACTIONS } from './App';

// Destructure `dispatch` and `digit` from props directly
export default function DigitButton({ dispatch, digit }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    );
}