'use client'

import React, { useContext } from 'react';
import { Context } from '../../../context/GlobalState';

function FilterAge() {
    
    const {state, dispatch} = useContext(Context);

    const changeAge = (age) => {
        dispatch({type: "CHANGE_AGE", payload: age});
    }

    const age = state.age;

    return(
        <select className="size-select" name="adoptionStatus" value={age} onChange={(e) => changeAge(e.target.value)}>
            <option value="Any">Escoge una edad</option>
            <option value="baby">Bebe</option>
            <option value="young">Joven</option>
            <option value="adult">Adulto</option>
            <option value="senior">Mayorcito</option>
        </select>
    )
}

export default FilterAge;