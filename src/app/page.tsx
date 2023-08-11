'use client'

import React from 'react';
import PetList from '../components/pets/PetList';
import AnimalTypeFilter from '../components/filters/Filters';
import PetModal from '../components/modal/PetModal';

export default function Page() {



    return (
        <>
            < AnimalTypeFilter />
            < PetList />
            < PetModal />
        </>
    )
}