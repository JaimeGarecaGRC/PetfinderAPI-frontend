'use client'

import React, { useContext, useState } from 'react';
import { Context } from '../../../context/GlobalState';

function FilterAdoptionStatus() {

    const {state, dispatch}: any = useContext(Context);

    const changeAdoptionStatus = (adoptionStatus) => {
        dispatch({type: "CHANGE_ADOPTION_STATUS", payload: adoptionStatus});
    }

    const adoptionStatus = state.adoption_status;

    return(
        <select className="size-select" name="adoptionStatus" value={adoptionStatus} onChange={(e) => changeAdoptionStatus(e.target.value)}>
            <option value="Any">Cualquier estado de adopcion</option>
            <option value="adoptable">Por Adoptar</option>
            <option value="adopted">Adoptado</option>
            <option value="found">Encontrado</option>
        </select>
    )
}

export default FilterAdoptionStatus;