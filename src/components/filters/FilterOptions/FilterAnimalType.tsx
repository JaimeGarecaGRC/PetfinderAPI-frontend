'use client'

import React, { useContext } from 'react';
import { Context } from '../../../context/GlobalState';

function FilterAnimalType() {

    const {state, dispatch} = useContext(Context);

    const changeAnimalType = (animalType) => {
        dispatch({type: "CHANGE_ANIMAL_TYPE", payload: animalType});
    }

    return(
        <>
            <p>{state.animal_type}</p>
            <button type="button" onClick={() => changeAnimalType('Any')}>Cualquiera</button>
            <button type="button" onClick={() => changeAnimalType('Dog')}>Perro</button>
            <button type="button" onClick={() => changeAnimalType('Cat')}>Gato</button>
        </>
        
    )
}

export default FilterAnimalType;