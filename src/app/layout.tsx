import React from 'react';
import Header from '../components/header/Header';
import { GlobalProvider } from '../context/GlobalState';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin']
}) 



export default function RootLayout({ children, }: { children: React.ReactNode }) {    
    return (
        <html lang="en" className={inter.className}>
            <GlobalProvider>
                <body>
                    <Header />
                    {children}
                </body>
            </GlobalProvider>
        </html>
    )
}