"use client";
import React, { useState } from 'react';

const Counter = () => {


    const [state, setState] = useState(0)

    return (
        <div>
            <div className='flex items-center gap-4'>
                <button onClick={() => setState( state + 1)}>Up</button>
                <h1>{state}</h1>
                <button onClick={() => setState( state - 1)}>Down</button>
            </div>
        </div>
    );
};

export default Counter;