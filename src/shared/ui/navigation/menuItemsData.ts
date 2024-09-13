import {MenuItemType} from '../../types/common.types';

export const menuItemsData: MenuItemType[] = [
    {title: "Главная", url: "/"},
    {
        title: "Аренда", url: "arenda",
        subMenuItems: [
            {
                title: "Аренда мини-экскаватора",
                url: "arenda/arenda-mini-ekskavatora"
            },
            {
                title: "Аренда гидромолота",
                url: "arenda/arenda-gidromolota"
            },

            {
                title: "Аренда ямобура",
                url: "arenda/arenda-yamobura"
            },
        ]
    },

    {
        title: "Услуги", url: "uslugi",
        subMenuItems: [
            {
                title: "Бурение",
                url: "uslugi/burenie"
            },
            {
                title: "Копание",
                url: "uslugi/kopanie"
            },

            {
                title: "Корчевание пней",
                url: "uslugi/korchevanie-pnej"
            },
            {
                title: "Перемещение грунта",
                url: "uslugi/peremeshchenie-grunta"
            }
        ]
    },
    {title: "Цены", url: "price"},
    {title: "Наши работы", url: "projects"},
    {title: "Контакты", url: "contacts"}
]