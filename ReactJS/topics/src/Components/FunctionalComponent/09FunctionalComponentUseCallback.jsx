import React, { useCallback, useState } from 'react';

const funccount = new Set();
const FunctionalComponentUseCallback = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    // const incrementCounter = () => {
    //     setCount(count + 1);
    // };
    // const decrementCounter = () => {
    //     setCount(count - 1);
    // };

    // const incrementNumber = () => {
    //     setNumber(number + 1);
    // };

    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log(funccount);
    return (
        <>
            Count: {count} <br />
            Number: {number} <br />
            <button onClick={incrementCounter}>Increase counter</button>
            <button onClick={decrementCounter}>Decrease Counter</button>
            <button onClick={incrementNumber}>increase number</button>

        </>
    );
};

export default FunctionalComponentUseCallback;
