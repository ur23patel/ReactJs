import React, { useEffect, useLayoutEffect } from 'react';

const FunctionalComponentUseEffectUseLayoutEffect = () => {
    useEffect(() => {
        // getdata()
        async function test(){
            await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
        }

        test()
    })
    // async function getdata(params) {
    //     let AllData = await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
    //     return AllData
    // }
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");

        fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
        return (() => {
            console.log("called");
            // fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
        })
    }, [])
    //  useLayoutEffect( async () => {
    //     console.log("called useLayoutEffect");
    //Warning: useLayoutEffect must not return anything besides a function, which is used for clean-up.

    //It looks like you wrote useLayoutEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:


    //     await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
    //     return (()=>{
    //         console.log("called");
    //         // fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
    //     })
    // },[])
    return (
        <>
            <h3>difference bten useEffect vs useLayoutEffect</h3>
            <img src="./../../useEffect-vs-useLayoutEffect.png" alt="" />
        </>
    );
};

export default FunctionalComponentUseEffectUseLayoutEffect;
