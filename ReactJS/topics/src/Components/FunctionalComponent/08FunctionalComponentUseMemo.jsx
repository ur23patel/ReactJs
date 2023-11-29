import React, { useMemo, useState } from 'react';

const FunctionalComponentUseMemo = () => {
    const [counter, kuchbhi] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["hey", "this", "is", "cool"];
    const word = words[wordIndex]
    // const word = words[wordIndex]
    const computeLetterCount = (word) => {
        let i = 0
        while (i < 10000) i++;
        console.log("computeLetterCount",i);
        return word.length
    }
    // const letterCount = useMemo(() => computeLetterCount(word))
    // const letterCount =  computeLetterCount(word)
    // const letterCount = useMemo(() => computeLetterCount(word))
    const letterCount =  computeLetterCount(word)
    // const increment = () => kuchbhi(counter + 1)
    return (
        <>
            <p>UseMemo</p>
            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
            <p>{words[0]}</p>
            <p>{words[1]}</p>
            <p>{words[2]}</p>
            <p>{words[3]}</p>
            <p>words = ["hey", "this", "is", "cool"];</p>
            <p>Words Array Element of {wordIndex} index: {word}</p>


            <p>
                "{word}" has {letterCount} letters
            </p>

            State for word count: {wordIndex}
            {/* {computeLetterCount(wordIndex)} */}
            <button onClick={() => {
                if (wordIndex + 1 === words.length) {
                    setWordIndex(0);
                } else {
                    setWordIndex(wordIndex + 1);
                }
            }}>Click Next Word Count</button>

            {/* {50 + 60}
            <button className='btn btn-primary' onClick={increment}>+</button>
            &nbsp; <label htmlFor="">{counter}</label>&nbsp;
            <button className='btn btn-danger' onClick={() => { kuchbhi(counter - 1) }}>-</button> */}
        </>
    );
};

export default FunctionalComponentUseMemo;
