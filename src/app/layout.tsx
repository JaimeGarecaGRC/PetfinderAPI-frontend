import React from 'react';
import Header from '../components/header/Header';
import { GlobalProvider } from '../context/GlobalState';
import './global.css';
import { Comme } from 'next/font/google';

const comme = Comme({
    subsets: ['latin'],
    display: 'swap',
}) 



export default function RootLayout({ children, }: { children: React.ReactNode }) {    
    return (
        <html lang="en" className={comme.className}>
            <GlobalProvider>
                <body>
                    <Header />
                    {children}
                </body>
            </GlobalProvider>
        </html>
    )
}