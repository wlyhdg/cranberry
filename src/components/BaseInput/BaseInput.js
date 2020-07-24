import React, { useState, useRef, useEffect } from 'react'

const BaseInput = () => {
    const [inp, setInp] = useState(null);
    const inpRef = useRef(null);

    const inquire = () => {
        console.log('hi')
        setInp(inpRef.current.value)
    }

    useEffect(() => {

    })

    return (
        <div style = {{margin: '200px'}}>
            <input ref={inpRef}></input>
            <button onClick={inquire}>I do what I want</button>
            <p>{inp}</p>
        </div>
    )
}

export default BaseInput;