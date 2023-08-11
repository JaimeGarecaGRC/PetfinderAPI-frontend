'use client'

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../context/GlobalState';

function FilterBreed() {

    const {state, dispatch} = useContext(Context);

    const [searchTerm, setSearchTerm] = useState('');
    
    const changeBreed = (breed) => {
        setTimeout(() => {
        dispatch({type: "CHANGE_BREED", payload: breed});
        }, 4000); 
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        changeBreed(event.target.value);
    };


    const [breeds, setBreeds] = useState([]);

    const AccToken = state.acc_token;
    const animalType = state.animal_type;

    const getAnimalBreeds = async () => {
        if (AccToken) {
            try {
                const response = await fetch(`https://api.petfinder.com/v2/types/${animalType}/breeds`, {
                    method: 'GET',
                    headers: {
                    'Authorization':`Bearer ${AccToken}`
                    },
            });
        
            if (response.ok) {
                const data = await response.json();
                setBreeds(data.breeds);
            } else {
                console.error('API Error:', response.status, response.statusText);
            }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    useEffect(() => {
        if(AccToken !== "No Token")
            getAnimalBreeds();
    }, [AccToken, animalType])

    return(
        <div className="filter-breed-container">
            <input type="text" id="searchInput" list="suggestions" placeholder="Busca una raza" value={searchTerm} onChange={handleInputChange}/>
            <datalist id="suggestions">
                <option value="Cualquier Raza"></option>
                {breeds.map((breed, index) => {
                    return(
                        <option value={breed.name}></option>
                    )
                })
            }
            </datalist>
        </div>
    )
}

export default FilterBreed;