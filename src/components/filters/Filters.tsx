'use client'

import React, { useState } from 'react';
import FilterAnimalType from './FilterOptions/FilterAnimalType';
import FilterBreed from './FilterOptions/FilterBreed';
import FilterGender from './FilterOptions/FilterGender';
import FilterSize from './FilterOptions/FilterSize';
import FilterAge from './FilterOptions/FilterAge';
import FilterAdoptionStatus from './FilterOptions/FilterAdoptionStatus';

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


    return(
        <div>
        <h2>Filtrar:</h2>
        <h4>Por tipo de animal:</h4>

        < FilterAnimalType />
        < FilterBreed />
        < FilterSize />
        < FilterGender />
        < FilterAge />
        < FilterAdoptionStatus />
        
    </div>
    )
}

export default Filters;