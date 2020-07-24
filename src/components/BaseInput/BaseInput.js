import React, { useState, useRef, useEffect } from 'react'

const BaseInput = () => {
    const [inp, setInp] = useState(null);
    const testRef = useRef(null);

    const foobar = () => {
        console.log('hi')
        setInp(testRef.current.value)
    }

    useEffect(() => {

    })

    return (
        <div style = {{margin: '200px'}}>
            <input ref={testRef}></input>
            <button onClick={foobar}>I do what I want</button>
            <p>{inp}</p>
        </div>
    )
}

export default BaseInput;