import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faPeopleArrowsLeftRight,
    faPlusCircle,
    faSoap,
    faBars,
    faLinkSlash,
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
import {theme} from './styles/Theme.styled';
import {Header} from './features/header/Header';


function App() {
    return (
        <div>
            {/*<h1>Бла бла бла H1 </h1>*/}
            {/*<h2>Бла бла бла H1 </h2>*/}
            {/*<h3>Бла бла бла H1 </h3>*/}
            {/*<p>Бла бла блаv Бла бла бла - P</p>*/}
            {/*<FontAwesomeIcon icon = {faMapMarkerAlt} size = {'4x'} color = {theme.colors.primary}/>*/}
            <Header/>

        </div>
    );
}

export default App;
