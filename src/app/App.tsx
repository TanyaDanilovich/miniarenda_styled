/// <reference types="react/canary" />
import React from 'react';
import {Footer} from '../widgets/footer/Footer';
import {register} from 'swiper/element/bundle';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';


// Register Swiper web component
register();

function App() {

    return (
        <div>
            <RouterProvider router = {router} />;
            <Footer/>
        </div>
    );
}

export default App;
