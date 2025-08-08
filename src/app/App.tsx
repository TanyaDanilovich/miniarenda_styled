/// <reference types="react/canary" />
import {register} from 'swiper/element/bundle';

import {Header} from '../widgets/header/Header';
import {Main} from '../pages/main/Main';
import {Footer} from '../widgets/footer/Footer';


// Register Swiper web component
register();

function App() {
    // return <RouterProvider router = {router}/>
    return <>
        <Header/>
        <Main/>
        <Footer/>
    </>

}

export default App;

