'use client'

import React, { useState } from 'react';

function FilterGender() {
    
    const [gender, setGender] = useState('');

    return (
        <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Escoge un Genero</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
        </select>

    )
}

export default FilterGender;