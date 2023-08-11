'use client'

import React, { useState } from 'react';
import FilterAnimalType from './FilterOptions/FilterAnimalType';
import FilterBreed from './FilterOptions/FilterBreed';
import FilterGender from './FilterOptions/FilterGender';
import FilterSize from './FilterOptions/FilterSize';
import FilterAge from './FilterOptions/FilterAge';
import FilterAdoptionStatus from './FilterOptions/FilterAdoptionStatus';

function Filters() {


    return(
        <div className="filters-container">
            <h2>Busqueda Personalizada:</h2>
            <div className="filter">
                <h4>Por tipo de animal:</h4>
                <FilterAnimalType />
            </div>
            <div className="filter">
                <h4>Por raza:</h4>
                <FilterBreed />
            </div>
            <div className="filter">
                <h4>Por tamaño:</h4>
                <FilterSize />
            </div>
            <div className="filter">
                <h4>Por género:</h4>
                <FilterGender />
            </div>
            <div className="filter">
                <h4>Por edad:</h4>
                <FilterAge />
            </div>
            <div className="filter">
                <h4>Por estado de adopción:</h4>
                <FilterAdoptionStatus />
            </div>
        </div>
    )
}

export default Filters;