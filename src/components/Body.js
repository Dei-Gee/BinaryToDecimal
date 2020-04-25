import React, { useState } from 'react';
import Header from './Header';
import { binaryValidator, binaryToDecimal } from '../utils/utils';
import '../styles/Body.css';

const Body = () => {
    const [binary, setBinary] = useState(0);
    const [decimal, setDecimal] = useState(0);

    return(
        <div>
            <Header />
            <main className="main-wrapper">
                <input className="textbox" type="text" onChange={(e) => {setBinary(e.target.value)}} maxLength="8" />
                <button className="convert-button" type="button" onClick={() => {setDecimal(binaryToDecimal(binary))}}>Convert to Decimal</button>
                <h3 className="result-display">{decimal}</h3>
            </main>
        </div>
    );
}

export default Body;