'use client'

import React, { useContext } from 'react';
import { Context } from '../../../context/GlobalState';

function FilterSize() {

    const {state, dispatch}: any = useContext(Context);

    const changeSize = (size) => {
        dispatch({type: "CHANGE_SIZE", payload: size});
    }

    const size = state.size;

    return (
        <select className="size-select" name="size" value={size} onChange={(e) => changeSize(e.target.value)}>
            <option value="Any">Cualquier Tamaño</option>
            <option value="small">Pequeñito</option>
            <option value="medium">Mediano</option>
            <option value="large">Grande</option>
            <option value="xlarge">Grandote</option>
        </select>
    )
}

export default FilterSize;