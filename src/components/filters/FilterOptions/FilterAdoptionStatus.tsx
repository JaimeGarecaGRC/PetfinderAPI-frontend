'use client'

import React, { useState } from 'react';

function FilterAdoptionStatus() {
    
    const [adoptionStatus, setAdoptionStatus] = useState('');

    return(
        <select name="adoptionStatus" value={adoptionStatus} onChange={(e) => setAdoptionStatus(e.target.value)}>
            <option value="any">Escoge un Estado de Adopcion</option>
            <option value="Adoptado">Adoptado</option>
            <option value="Por Adoptar">Por Adoptar</option>
        </select>
    )
}

export default FilterAdoptionStatus;