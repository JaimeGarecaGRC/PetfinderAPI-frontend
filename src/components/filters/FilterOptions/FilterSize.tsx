'use client'

import React, { useState } from 'react';

function FilterSize() {

    const [size, setSize] = useState('');

    return (
        <select name="size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Escoge un Tamaño</option>
            <option value="L">L</option>
            <option value="M">M</option>
        </select>
    )
}

export default FilterSize;