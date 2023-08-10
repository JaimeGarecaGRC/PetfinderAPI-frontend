'use client'

import React, { useState } from 'react';

function FilterAge() {
    
    const [age, setAge] = useState('');

    return(
        <select name="adoptionStatus" value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="">Escoge una edad</option>
            <option value="Adoptado">Baby</option>
            <option value="Por Adoptar">Young</option>
        </select>
    )
}

export default FilterAge;