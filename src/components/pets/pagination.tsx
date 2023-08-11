'use client'

import React, { useContext } from 'react';
import { Context } from '../../context/GlobalState';

function Pagination() {

    const {state, dispatch}: any = useContext(Context);

    const changeNextPage = (gender) => {
        dispatch({type: "NEXT_PAGE"});
    }

    const changePreviousPage = (total) => {
        dispatch({type: "PREVIOUS_PAGE"});
    }

    const page = state.page;
    const total = state.total;

    return(
        <div className="pagination">
            <button onClick={changePreviousPage} disabled={page === 1}>Anterior</button>
            <span>Página {page} de {total}</span>
            <button onClick={changeNextPage} disabled={page === total}>Siguiente</button>
        </div>
    )
}

export default Pagination;