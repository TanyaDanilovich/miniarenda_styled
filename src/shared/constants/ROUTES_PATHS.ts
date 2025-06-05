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

export const ROUTES_PATHS = {
    home: {
        url: "#hero",
        title: "Главная",
        i18nKey: "pages.home.navigation",
    },
    services: {
        url: "#services",
        title: "Услуги",
        i18nKey: "pages.services.navigation",
    },
    price: {
        url: "#prices",
        title: "Стоимость услуг",
        i18nKey: "pages.price.navigation",
    },
    machineries: {
        url: "#machineries",
        title: "Наша техника",
        i18nKey: "pages.machineries.navigation",
    },
    equipments: {
        url: "#equipments",
        title: "Оборудование",
        i18nKey: "pages.equipments.navigation",
    },
    projects: {
        url: "#projects",
        title: "Наши работы",
        i18nKey: "pages.projects.navigation",
    },
    reviews: {
        url: "#reviews",
        title: "Отзывы",
        i18nKey: "pages.reviews.navigation",
    },
    faq: {
        url: "#faq",
        title: "Вопрос-ответ",
        i18nKey: "pages.faq.navigation",
    },
};
