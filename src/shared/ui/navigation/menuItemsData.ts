import {MenuItemType} from '../../types/common.types';
import {ROUTES_PATHS} from '../../constants/ROUTES_PATHS';

export const menuItemsData: MenuItemType[] = [
    {
        title: ROUTES_PATHS.home.title,
        url: ROUTES_PATHS.home.url
    },
    {
        title: ROUTES_PATHS.services.title,
        url: ROUTES_PATHS.services.url,
    },
    {
        title: ROUTES_PATHS.price.title,
        url: ROUTES_PATHS.price.url
    },
    {
        title: ROUTES_PATHS.equipments.title,
        url: ROUTES_PATHS.equipments.url
    },
    {
        title: ROUTES_PATHS.reviews.title,
        url: ROUTES_PATHS.reviews.url
    },
    {
        title: ROUTES_PATHS.faq.title,
        url: ROUTES_PATHS.faq.url
    },
];
