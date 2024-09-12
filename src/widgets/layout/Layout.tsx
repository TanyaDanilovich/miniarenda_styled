import {Outlet} from 'react-router-dom';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import React from 'react';

export const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}