import React, { useMemo, useState, useEffect } from 'react';

const FunctionalCompoUseMemoExample = () => {

    const [count, setCount] = useState(0);
    const [evenNum, setEvenNum] = useState(2)

    // use memo will be optimized our component Re-rendering START

    // let data = ()=>{}
    // const memoHook = useMemo(function evenNumDouble() {
    //     console.log("double");
    //     return evenNum * 2;
    // }, [])
    const memoHook = useMemo(function evenNumDouble() {
        console.log("double");
        return evenNum * 2;
    }, [evenNum])
    // use memo will be optimized our component Re-rendering END




    // useEffect mainly used for the HTTP request START 
    // useEffect(()=>{
    //     evenNumDouble()
    // },[evenNum])

    // function evenNumDouble() {
    //     console.log("double");
    //     return evenNum * 2;
    // }
    // useEffect mainly used for the HTTP request END
    
    
    return (
        <>
            <a href="https://www.joshwcomeau.com/react/usememo-and-usecallback/">Reference</a>
            <h2>Counter: {count}</h2>
            <h2>Even Numbers: {evenNum}</h2>
            <h2>even Number Double Value: {memoHook}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setEvenNum(evenNum + 2)}>Even Numbers</button>
        </>
    );



    // function evenNumDouble() {
    //     console.log("double");
    //     return evenNum * 2;
    // }

    // return (
    //     <div>
    //         <h2>Counter: {count}</h2>
    //         <h2>Even Numbers: {evenNum}</h2>
    //         <h2>even Number Double Value: {evenNumDouble()}</h2>
    //         <button onClick={() => setCount(count + 1)}>Increment</button>
    //         <button onClick={() => setEvenNum(evenNum + 2)}>Even Numbers</button>
    //     </div>
    // )

};

export default FunctionalCompoUseMemoExample;
