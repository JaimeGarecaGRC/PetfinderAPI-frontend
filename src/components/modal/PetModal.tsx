'use client'

import React, { useContext } from 'react';
import { Context } from '../../context/GlobalState';

function PetModal() {

    const {state, dispatch}: any = useContext(Context);

    const pet = state.pet;
    const modal = state.modal;

    const onClose = () => {
        dispatch({type: "CHANGE_MODAL_STATE", payload: false});
    }

    const imagenDefecto = 'data:image/jpeg;base64,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';
    
    if(modal){
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="pet-header">
                    <img src={pet.photos?.length > 0 ? pet.photos[0].medium : imagenDefecto} alt="Pet" />
                    <h2>{pet.name}</h2>
                </div>
                <div className="pet-details">
                    <div className="details-content">
                        <p><strong>Tipo:</strong> {pet.type}</p>
                        <p><strong>Raza:</strong> {pet.breeds?.primary}</p>
                        <p><strong>Edad:</strong> {pet.age}</p>
                        <p><strong>Género:</strong> {pet.gender}</p>
                        <p><strong>Color:</strong> {pet.colors !== undefined ? pet.colors.primary : ""}</p>
                        <p><strong>Tamaño:</strong> {pet.size}</p>
                        <p><strong>Descripción:</strong> {pet.description}</p>
                        <p><strong>Estado de Adopción:</strong> {pet.status}</p>
                    </div>
                    <button onClick={() => onClose()}>Cerrar</button>
                </div>
                
            </div>
        </div>
    )
    }else{
        return <></>
    }
}

export default PetModal;