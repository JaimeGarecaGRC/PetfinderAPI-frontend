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
            <h2>Filtrar:</h2>
            <div className="filter">
                <h4>Por tipo de animal:</h4>
                <FilterAnimalType />
            </div>
            <div className="filter">
                <h4>Raza:</h4>
                <FilterBreed />
            </div>
            <div className="filter">
                <h4>Tamaño:</h4>
                <FilterSize />
            </div>
            <div className="filter">
                <h4>Género:</h4>
                <FilterGender />
            </div>
            <div className="filter">
                <h4>Edad:</h4>
                <FilterAge />
            </div>
            <div className="filter">
                <h4>Estado de adopción:</h4>
                <FilterAdoptionStatus />
            </div>
        </div>
    )
}

export default Filters;