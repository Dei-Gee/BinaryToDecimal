import React, { useState } from 'react';
import Header from './Header';
import { binaryValidator, binaryToDecimal } from '../utils/utils';

const Body = () => {
    const [binary, setBinary] = useState(0);
    const [decimal, setDecimal] = useState(0);

    return(
        <div>
            <Header />
            <input type="text" onChange={(e) => {setBinary(e.target.value)}} maxLength="8" />
            <button type="button" onClick={() => {setDecimal(binaryToDecimal(binary))}}>Convert to Decimal</button>
            <h3>{decimal}</h3>
        </div>
    );
}

export default Body;