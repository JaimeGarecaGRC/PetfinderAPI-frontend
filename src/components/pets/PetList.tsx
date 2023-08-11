'use client'

import React, { useContext, useEffect, useState } from 'react';
import PetListItem from './PetListItem';
import { Context } from '../../context/GlobalState';
import { stat } from 'fs';
import Pagination from './pagination';

function PetList() {


    const [loading, setLoading] = useState(false);

    const {state, dispatch}: any = useContext(Context);

    const changeTotalPages = (totalPages) => {
        dispatch({type: "CHANGE_TOTAL", payload: totalPages});
    }

    const changeResetPage = () => {
        dispatch({type: "RESET_PAGE"});
    }
    const [animals, setAnimals] = useState([]);

    const AccToken = state.acc_token;
    const animalType = state.animal_type;
    const breed = state.breed;
    const size = state.size;
    const gender = state.gender;
    const age = state.age;
    const status = state.adoption_status;
    const page = state.page;

    const getAnimalList = async () => {
        if (AccToken) {
            setLoading(true);
            const breedIURL = breed !== ( "Any" || "" )? `&breed=${breed}` : "" ;
            const sizeIURL = size !== "Any" ? `&size=${size}` : "" ;
            const genderIURL = gender !== "Any" ? `&gender=${gender}` : "";
            const ageIURL = age !== "Any" ? `&age=${age}` : "";
            const statusIURL = status !== "Any" ? `&status=${status}` : "";

            try {
                const response = await fetch(`https://api.petfinder.com/v2/animals?type=${animalType}${breedIURL}${sizeIURL}${genderIURL}${ageIURL}${statusIURL}&page=${page}&limit=30`, {
                    method: 'GET',
                    headers: {
                    'Authorization':`Bearer ${AccToken}`
                    },
            });
        
            if (response.ok) {
                const data = await response.json();
                setAnimals(data.animals);
                changeTotalPages(data.pagination.total_pages);
                setLoading(false);

            } else {
                console.error('API Error:', response.status, response.statusText);
                setLoading(false);
            }
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        if(AccToken !== "No Token")
            getAnimalList();
    }, [AccToken, animalType, breed, size, gender, age, status, page])

    useEffect(() => {
        if(AccToken !== "No Token")
            changeResetPage();
    }, [AccToken, animalType, breed, size, gender, age, status])

    
    return (
        <div className='pet-list-big-container'>
            <h1>Conoce a tu futuro Peludito:</h1>
            <div className="pet-list-container">
                {loading ? 
                    <img className="pet-list-loading-image" src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="Esta cargando" />
                    :
                    animals.map((animal, index) => (
                        <PetListItem key={index} petInfo={animal} />
                    ))
                }

                
            </div>
            < Pagination />
        </div>
    )
    
}

export default PetList;