'use client'

import React, { useState } from 'react';

/*
    Filtrar por:
    Tipo de Animal (Perro o gato)
    Raza,
    Tamaño,
    Genero,
    edad,
    estado de adopcion
*/

/* 
    Al filtrar por razas, quiero usar un buscador para encotnrar la raza que quiero mas facilmente.
*/


function Filters() {

    const [animalType, setAnimalType] = useState('');
    const [breed, setBreed] = useState('');
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('');

    return(
        <div>
            <h2>Filtrar:</h2>
            <h4>Por tipo de animal:</h4>
            <button type="button">Cualquiera</button>
            <button type="button">Perro</button>
            <button type="button">Gato</button>

            
        </div>
    )
}

export default Filters;