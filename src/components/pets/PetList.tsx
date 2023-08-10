import React from 'react';
import PetListItem from './PetListItem';

function PetList() {
    return (
        <>
            <h1>Conoce a tu futuro Peludito</h1>
            < PetListItem petInfo={{dato: "nombre"}} />
            < PetListItem petInfo={{dato: "nombre"}} />
            < PetListItem petInfo={{dato: "nombre"}} />
            < PetListItem petInfo={{dato: "nombre"}} />
            < PetListItem petInfo={{dato: "nombre"}} />
        </>
        
    )
}

export default PetList;