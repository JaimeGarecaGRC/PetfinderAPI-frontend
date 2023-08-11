'use client'

import React, { useContext } from 'react';
import { Context } from '../../../context/GlobalState';

function FilterAnimalType() {

    const {state, dispatch}: any = useContext(Context);

    const changeAnimalType = (animalType) => {
        dispatch({type: "CHANGE_ANIMAL_TYPE", payload: animalType});
        dispatch({type: "CHANGE_BREED", payload: "Any"});
    }

    return(
        <div className="animal-type-buttons">
            <button className={state.animal_type === 'Dog' ? 'active' : ''} type="button" onClick={() => changeAnimalType('Dog')}>Perro</button>
            <button className={state.animal_type === 'Cat' ? 'active' : ''} type="button" onClick={() => changeAnimalType('Cat')}>Gato</button>
        </div>
    )
}

export default FilterAnimalType;