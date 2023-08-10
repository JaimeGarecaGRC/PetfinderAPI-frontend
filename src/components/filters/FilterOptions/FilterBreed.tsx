'use client'

import React, { useState } from 'react';

function FilterBreed() {

    const [breed, setBreed] = useState('');

    return(
        <select name="breed" value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option value="">Escoge una Raza</option>
            <option value="Carey">Carey</option>
            <option value="Tofy">Tofy</option>
        </select>

    )
}

export default FilterBreed;