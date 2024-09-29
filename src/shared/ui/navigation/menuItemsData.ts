import {MenuItemType} from '../../types/common.types';

import {ROUTES_PATHS} from '../../constants/ROUTES_PATHS';

export const menuItemsData: MenuItemType[] = [
    {
        title: ROUTES_PATHS.home.title,
        url: ROUTES_PATHS.home.url
    },
    {
        title: ROUTES_PATHS.arenda.index.title,
        url: ROUTES_PATHS.arenda.index.url,
        subMenuItems: [
            {
                title: ROUTES_PATHS.arenda.arenda_Exavatora.title,
                url: `${ROUTES_PATHS.arenda.index.url}/${ROUTES_PATHS.arenda.arenda_Exavatora.url}`,
            },
            {
                title: ROUTES_PATHS.arenda.arenda_Yamobura.title,
                url: `${ROUTES_PATHS.arenda.index.url}/${ROUTES_PATHS.arenda.arenda_Yamobura.url}`,
            },

            {
                title: ROUTES_PATHS.arenda.arenda_Gidromolota.title,
                url: `${ROUTES_PATHS.arenda.index.url}/${ROUTES_PATHS.arenda.arenda_Gidromolota.url}`,
            },
        ]
    },

    {
        title: ROUTES_PATHS.uslugi.index.title,
        url: ROUTES_PATHS.uslugi.index.url,
        subMenuItems: [
            {
                title: ROUTES_PATHS.uslugi.diggingTrench.title,
                url: `${ROUTES_PATHS.uslugi.index.url}/${ROUTES_PATHS.uslugi.diggingTrench.url}`,
            },
            {
                title: ROUTES_PATHS.uslugi.diggingFoundation.title,
                url: `${ROUTES_PATHS.uslugi.index.url}/${ROUTES_PATHS.uslugi.diggingFoundation.url}`,
            },
            {
                title: ROUTES_PATHS.uslugi.stumpRemoval.title,
                url: `${ROUTES_PATHS.uslugi.index.url}/${ROUTES_PATHS.uslugi.stumpRemoval.url}`,
            },
            {
                title: ROUTES_PATHS.uslugi.drilling.title,
                url: `${ROUTES_PATHS.uslugi.index.url}/${ROUTES_PATHS.uslugi.drilling.url}`,
            },
            {
                title: ROUTES_PATHS.uslugi.groundMovement.title,
                url: `${ROUTES_PATHS.uslugi.index.url}/${ROUTES_PATHS.uslugi.groundMovement.url}`,
            },
            {
                title: ROUTES_PATHS.uslugi.otherGroundworks.title,
                url: `${ROUTES_PATHS.uslugi.index.url}/${ROUTES_PATHS.uslugi.otherGroundworks.url}`,
            },
            {
                title: ROUTES_PATHS.uslugi.dismantling.title,
                url: `${ROUTES_PATHS.uslugi.index.url}/${ROUTES_PATHS.uslugi.dismantling.url}`,
            },
        ]
    },
    {title: ROUTES_PATHS.price.title, url: ROUTES_PATHS.price.url},
    {title: ROUTES_PATHS.projects.title, url: ROUTES_PATHS.projects.url},
    {title: ROUTES_PATHS.contacts.title, url: ROUTES_PATHS.contacts.url}
]