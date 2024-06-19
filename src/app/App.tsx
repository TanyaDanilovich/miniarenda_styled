/// <reference types="react/canary" />

import {Header} from '../widgets/header/Header';
import React from 'react';
import {Footer} from '../widgets/footer/Footer';
import {Main} from '../widgets/main/Main';


function App() {

    return (
        <div>
            <Header/>
            <Main/>

            <Footer/>
        </div>
    );
}

export default App;
