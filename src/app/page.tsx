import React from 'react';
import PetList from '../components/pets/PetList';
import AnimalTypeFilter from '../components/filters/Filters';

export default function Page() {
    return (
        <>
            < AnimalTypeFilter />
            < PetList />
        </>
    )
}