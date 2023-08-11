'use client'

import React, { useContext } from 'react';
import { Context } from '../../../context/GlobalState';

function FilterGender() {
    
    const {state, dispatch} = useContext(Context);

    const changeGender = (gender) => {
        dispatch({type: "CHANGE_GENDER", payload: gender});
    }

    const gender = state.gender;


    return (
        <select className="size-select" name="gender" value={gender} onChange={(e) => changeGender(e.target.value)}>
            <option value="Any">Cualquier Genero</option>
            <option value="male">Macho</option>
            <option value="female">Hembra</option>
            <option value="unknow">Desconocido</option>
        </select>
    )
}

export default FilterGender;