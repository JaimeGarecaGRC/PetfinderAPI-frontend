'use client'

import React, { useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

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
            console.log('API Response:', data);
        } else {
            console.error('API Error:', response.status, response.statusText);
        }
        } catch (error) {
        console.error('Error:', error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Ingrese su Correo</label>
            <input type="text" id="email" value={email} onChange={handleEmailChange}/>
            <label htmlFor="password">Ingrese su Contraseña</label>
            <input type="text" id="password" value={password} onChange={handlePasswordChange} />
            <button type="submit">Acceder</button>
        </form>
    )
}

export default LoginForm;