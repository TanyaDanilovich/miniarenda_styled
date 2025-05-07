// import {CATEGORY} from './CATEGORY';
// import {RENTAL_SUBCATEGORY} from './RENTAL_SUBCATEGORY';
// import {SERVICE_SUBCATEGORY} from './SERVICE_SUBCATEGORY';
// import {CONTACTS_DATA, PRICES_DATA, PROJECTS_DATA} from './constants';
// import {getRoutePath} from '../utils/getRoutePath';
//
// export const ROUTES_PATHS = {
//     home: {url: "", title: "Главная"},
//     projects: {url: PROJECTS_DATA.url, title: PROJECTS_DATA.title},
//     contacts: {url: CONTACTS_DATA.url, title: CONTACTS_DATA.title},
//     price: {url: PRICES_DATA.url, title: PRICES_DATA.title},
//
//     arenda: {
//         index: getRoutePath(CATEGORY.RENTAL),
//         arenda_Exavatora: getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.EXCAVATOR),
//         arenda_Gidromolota: getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.HAMMER),
//         arenda_Yamobura: getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.DRILL),
//     },
//     uslugi: {
//         index: getRoutePath(CATEGORY.SERVICES),
//         diggingTrench: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DIGGING_TRENCH),
//         diggingFoundation: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DIGGING_FOUNDATION),
//         stumpRemoval: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.STUMP_REMOVAL),
//         drilling: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DRILLING),
//         groundMovement: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.GROUND_MOVEMENT),
//         otherGroundworks: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS),
//         dismantling: getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DISMANTLING),
//     }
// }


import { CATEGORY } from './CATEGORY';
import { RENTAL_SUBCATEGORY } from './RENTAL_SUBCATEGORY';
import { SERVICE_SUBCATEGORY } from './SERVICE_SUBCATEGORY';
import { CONTACTS_DATA, PRICES_DATA, PROJECTS_DATA } from './constants';
import { getRoutePath } from '../utils/getRoutePath';

export const ROUTES_PATHS = {
    home: {
        url: "",
        title: "Главная",
        i18nKey: "pages.home.navigation",
    },
    projects: {
        url: PROJECTS_DATA.url,
        title: PROJECTS_DATA.title,
        i18nKey: "pages.projects.navigation",
    },
    contacts: {
        url: CONTACTS_DATA.url,
        title: CONTACTS_DATA.title,
        i18nKey: "pages.contacts.navigation",
    },
    price: {
        url: PRICES_DATA.url,
        title: PRICES_DATA.title,
        i18nKey: "pages.price.navigation",
    },

    arenda: {
        index: {
            ...getRoutePath(CATEGORY.RENTAL),
            i18nKey: "pages.arenda.index.navigation",
        },
        arenda_Exavatora: {
            ...getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.EXCAVATOR),
            i18nKey: "pages.arenda.excavator.navigation",
        },
        arenda_Gidromolota: {
            ...getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.HAMMER),
            i18nKey: "pages.arenda.hammer.navigation",
        },
        arenda_Yamobura: {
            ...getRoutePath(CATEGORY.RENTAL, RENTAL_SUBCATEGORY.DRILL),
            i18nKey: "pages.arenda.yamobur.navigation",
        },
    },

    uslugi: {
        index: {
            ...getRoutePath(CATEGORY.SERVICES),
            i18nKey: "pages.uslugi.index.navigation",
        },
        diggingTrench: {
            ...getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DIGGING_TRENCH),
            i18nKey: "pages.uslugi.diggingTrench.navigation",
        },
        diggingFoundation: {
            ...getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DIGGING_FOUNDATION),
            i18nKey: "pages.uslugi.diggingFoundation.navigation",
        },
        stumpRemoval: {
            ...getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.STUMP_REMOVAL),
            i18nKey: "pages.uslugi.stumpRemoval.navigation",
        },
        drilling: {
            ...getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DRILLING),
            i18nKey: "pages.uslugi.drilling.navigation",
        },
        groundMovement: {
            ...getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.GROUND_MOVEMENT),
            i18nKey: "pages.uslugi.groundMovement.navigation",
        },
        otherGroundworks: {
            ...getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS),
            i18nKey: "pages.uslugi.otherGroundworks.navigation",
        },
        dismantling: {
            ...getRoutePath(CATEGORY.SERVICES, SERVICE_SUBCATEGORY.DISMANTLING),
            i18nKey: "pages.uslugi.dismantling.navigation",
        },
    },
};
