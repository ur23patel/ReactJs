import React, { useLayoutEffect, useState } from 'react';

const FunctionalComponentuseLayoutEffect = () => {
    const [state, changeState] = useState(false);
    const [state2, changeState2] = useState(false);
    // useLayoutEffect(()=>{
    //     // console.log("called");
    //     fetch("https://jsonplaceholder.typicode.com/todos/").then((res)=>res.json()).then((response)=>{ console.log(response); })
    // })
    // useLayoutEffect(()=>{
    //     // console.log("called");
    //     fetch("https://jsonplaceholder.typicode.com/todos/").then((res)=>res.json()).then((response)=>{ console.log(response); })
    // },[state2])
    useLayoutEffect(() => {
        // console.log("called");
        fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
        return (() => {
            console.log("called unmont");
        })
    }, [state2])
    return (
        <>
            render
            <button onClick={() => { changeState(!state) }}>Click</button>
            <button onClick={() => { changeState2(!state) }}>Click</button>
            const [count, setCount] = useState(0);

            
        </>
    );
};

export default FunctionalComponentuseLayoutEffect;
