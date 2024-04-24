import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faPeopleArrowsLeftRight,
    faPlusCircle,
    faSoap,
    faBars,

    faExternalLinkSquare,
    faAngleDown,
    faFaceGrinStars,
    faGrinStars,
    faStarAndCrescent,
    faStar,
    faSitemap,
    faMapLocation,
    faMapMarker,
    faMapMarkerAlt,
    faSearch,

} from '@fortawesome/free-solid-svg-icons'

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
