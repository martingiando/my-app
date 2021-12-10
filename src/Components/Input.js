import React, { useState } from 'react'

const Input = ({callback}) => {

    const [value, setValue] = useState('Joh')

    // console.log(value);

    const handleValue = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={(e) => handleValue} />
            <button onClick={callback(value)}>Submit</button>
        </div>
    )
}

export default Input
