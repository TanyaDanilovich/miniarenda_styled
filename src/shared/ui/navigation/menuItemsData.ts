import {MenuItemType} from '../../types/common.types';
import {ROUTES_PATHS} from '../../constants/ROUTES_PATHS';

export const menuItemsData: MenuItemType[] = [
    {
        i18nKey: ROUTES_PATHS.home.i18nKey,
        url: ROUTES_PATHS.home.url
    },
    {
        i18nKey: ROUTES_PATHS.services.i18nKey,
        url: ROUTES_PATHS.services.url,
    },
    {
        i18nKey: ROUTES_PATHS.price.i18nKey,
        url: ROUTES_PATHS.price.url
    },
    {
        i18nKey: ROUTES_PATHS.equipments.i18nKey,
        url: ROUTES_PATHS.equipments.url
    },
    // {
    //     i18nKey: ROUTES_PATHS.machineries.i18nKey,
    //     url: ROUTES_PATHS.machineries.url
    // },
    // {
    //     i18nKey: ROUTES_PATHS.projects.i18nKey,
    //     url: ROUTES_PATHS.projects.url
    // },
    {
        i18nKey: ROUTES_PATHS.reviews.i18nKey,
        url: ROUTES_PATHS.reviews.url
    },
    {
        i18nKey: ROUTES_PATHS.faq.i18nKey,
        url: ROUTES_PATHS.faq.url
    },
];
