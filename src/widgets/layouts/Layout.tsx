import {Outlet, ScrollRestoration} from 'react-router-dom';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import React from 'react';

export const Layout = () => {
    return (
        <>
            <ScrollRestoration getKey = {(location, matches) => {
                // default behavior
                console.log(location, matches)
                return location.key;
            }}/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}