'use client'

import React, { useContext, useEffect, useState } from 'react';
import PetListItem from './PetListItem';
import { Context } from '../../context/GlobalState';

function PetList() {

    const {state} = useContext(Context);

    const [animals, setAnimals] = useState([]);

    const AccToken = state.acc_token;


    const getAnimalList = async () => {
        if (AccToken) {
            try {
                const response = await fetch('https://api.petfinder.com/v2/animals', {
                    method: 'GET',
                    headers: {
                    'Authorization':`Bearer ${AccToken}`
                    },
            });
        
            if (response.ok) {
                const data = await response.json();
                setAnimals(data.animals);
            } else {
                console.error('API Error:', response.status, response.statusText);
            }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    useEffect(() => {
        getAnimalList();
    }, [AccToken])


    return (
        <>
            <h1>Conoce a tu futuro Peludito:</h1>
            {animals.map((animal, index) => (
                <PetListItem key={index} petInfo={animal} />
            ))}
        </>
        
    )
}

export default PetList;