import React, { useState } from 'react';
import Name from '../Components/Name';
import Input from '../Components/Input';

const Container = () => {

    const [name, setName] = useState('John');

    const handleChange = (value) => {
        setName(value);
    }

    return (
        <div>
            <Name name={name} />
            <Input callback={()=>handleChange} />
        </div>
    )
}

export default Container;