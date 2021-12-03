import React, { useState } from 'react';
import Name from '../Components/Name';

const Container = () => {

    const [name, setName] = useState('John');

    const handleChange = () => {
        const input = document.getElementById('nameInput').value;
        setName(input);
    }

    return (
        <div>
            <Name name={name} />
            <input type="text" id='nameInput' />
            <button onClick={handleChange}>Submit</button>
        </div>
    )
}

export default Container;