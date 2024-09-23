/// <reference types="react/canary" />
import React from 'react';
import {register} from 'swiper/element/bundle';
import {RouterProvider, ScrollRestoration} from 'react-router-dom';
import {router} from './router';


// Register Swiper web component
register();

function App() {
    return <RouterProvider router = {router}/>

}

export default App;

