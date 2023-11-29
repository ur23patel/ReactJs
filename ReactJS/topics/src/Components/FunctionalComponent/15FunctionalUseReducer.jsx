import React, { useReducer } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "toggleShowText":
            return { count: state.count  , showText: !state.showText };
        default:
            return state;
    }
}
const FunctionalUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => { dispatch({ type: "INCREMENT" }); }} > Click Here </button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }); }} > Click Here </button>
            <button onClick={() => { dispatch({ type: "toggleShowText" }); }} > Click Here </button>
            {state.showText && <p>This is a text</p>}
            <p>Each of its event handlers calls setTasks in order to update the state. As this component grows, so does the amount of state logic sprinkled throughout it. To reduce this complexity and keep all your logic in one easy-to-access place, you can move that state logic into a single function outside your component, called a "reducer".</p>
            <p>By convention, it is common to give it a string type that describes what happened, and pass any additional information in other fields. The type is specific to a component, so in this example either 'added' or 'added_task' would be fine. Choose a name that says what happened!</p>
        </>
    );
};

export default FunctionalUseReducer;
