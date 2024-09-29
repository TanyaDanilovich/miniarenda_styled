import {CATEGORY} from './CATEGORY';
import {RENTAL_SUBCATEGORY} from './RENTAL_SUBCATEGORY';
import {SERVICE_SUBCATEGORY} from './SERVICE_SUBCATEGORY';
import {CONTACTS_DATA, PRICES_DATA, PROJECTS_DATA} from './constants';
import {getRoutePath} from '../utils/getRoutePath';

export const ROUTES_PATHS = {
    home: {url: "/", title: "Главная"},
    projects: {url: PROJECTS_DATA.url, title: PROJECTS_DATA.title},
    contacts: {url: CONTACTS_DATA.url, title: CONTACTS_DATA.title},
    price: {url: PRICES_DATA.url, title: PRICES_DATA.title},

    arenda: {
        index: getRoutePath(CATEGORY.RENTAL),
        arenda_Exavatora: getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.EXCAVATOR),
        arenda_Gidromolota: getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.HAMMER),
        arenda_Yamobura: getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.DRILL),
    },
    uslugi: {
        index: getRoutePath(CATEGORY.SERVICES),
        diggingTrench: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DIGGING_TRENCH),
        diggingFoundation: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DIGGING_FOUNDATION),
        stumpRemoval: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.STUMP_REMOVAL),
        drilling: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DRILLING),
        groundMovement: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.GROUND_MOVEMENT),
        otherGroundworks: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS),
        dismantling: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DISMANTLING),
    }
}