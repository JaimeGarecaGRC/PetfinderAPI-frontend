'use client'

import React, { useContext } from 'react';
import { Context } from '../../context/GlobalState';


function PetListItem( {petInfo} ) {

    const {state, dispatch}: any = useContext(Context);

    const modal = state.modal;

    const selectPet = (petData) => {
        dispatch({type: "CHANGE_PET_SELECTED", payload: petData});
        dispatch({type: "CHANGE_MODAL_STATE", payload: true});
    }

    const photoUrl = petInfo.photos.length > 0 ? petInfo.photos[0].medium : 'https://static.vecteezy.com/system/resources/previews/006/059/989/non_2x/crossed-camera-icon-avoid-taking-photos-image-is-not-available-illustration-free-vector.jpg';
    return(
        <div className='pet-list-item-box' onClick={() => selectPet(petInfo)}>
            <img src={photoUrl} alt="Pet Photo" />
            <p><strong>Nombre:</strong> {petInfo.name}</p>   
        </div>
    )
}

export default PetListItem;