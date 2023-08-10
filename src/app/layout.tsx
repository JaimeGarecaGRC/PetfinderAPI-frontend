import React from 'react';
import Header from '../components/header/Header';
import { GlobalProvider } from '../context/GlobalState';

export default function RootLayout({ children, }: { children: React.ReactNode }) {    
    return (
        <html lang="en">
            <body>
                <GlobalProvider>
                    <Header />
                    {children}
                </GlobalProvider>
            </body>
        </html>
    )
}