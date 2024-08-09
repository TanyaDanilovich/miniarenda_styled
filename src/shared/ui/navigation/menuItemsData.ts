import {MenuItemType} from '../../types/common.types';

export const menuItemsData: MenuItemType[] = [
    {title: "Главная", url: "/"},
    {
        title: "Услуги", url: "uslugi",
        subMenuItems: [
            {title: "Цены 1", url: "price1"},
            {title: "Наши работы 1", url: "projects1"},
            {title: "Контакты 1", url: "contacts1"}
        ]
    },
    {title: "Цены", url: "price"},
    {title: "Наши работы", url: "projects"},
    {title: "Контакты", url: "contacts"}
]