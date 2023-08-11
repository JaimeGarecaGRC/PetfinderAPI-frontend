'use client'

import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./AppReducer";

export const Context = createContext({});

const initialState = {
    acc_token: "No Token",
    animal_type: "Dog",
    breed: "Any",
    size: "Any",
    gender: "Any",
    age: "Any",
    adoption_status: "Any",
    pet: {},
    modal: false,
    page: 1,
    total: 1,
}

export const useGlobalState = () => {
    const context = useContext(Context)
    return context;
}

export const GlobalProvider = ({ children }) => {

    const fetchAccessToken = async () => {
        const userId = process.env.NEXT_PUBLIC_PETFINDER_USER_ID;
        const secret = process.env.NEXT_PUBLIC_PETFINDER_SECRET;

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