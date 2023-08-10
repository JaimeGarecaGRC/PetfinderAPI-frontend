'use client'

import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./AppReducer";

export const Context = createContext({});

const initialState = {
    acc_token: "Any",
    animal_type: "Any",
    breed: "Any",
    size: "Any",
    gender: "Any",
    age: "Any",
    adoption_status: "Any",
}

export const useGlobalState = () => {
    const context = useContext(Context)
    return context;
}

export const GlobalProvider = ({ children }) => {

    const fetchAccessToken = async () => {
        const userId = "57VDGxk6Do1RTBsA20fy6RHxx36F4CtslY70QdKLZDSWeYH4Cs";
        const secret = "0z3KhK2S26XQMonkLD6y3dE8SThE6nEcGuYgpjxd";

        const requestBody = `grant_type=client_credentials&client_id=${userId}&client_secret=${secret}`;

        try {
            const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: requestBody,
            });

            if (response.ok) {
                const data = await response.json();
                addAccToken(data.access_token);
                console.log()
                
            } else {
                console.error('API Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchAccessToken();
    }, []);


    const [state, dispatch] = useReducer(reducer, initialState);


    const addAccToken = (accToken) => {
        dispatch({
            type: "ADD_ACCESS_TOKEN",
            payload: accToken,
        })
    }



    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}