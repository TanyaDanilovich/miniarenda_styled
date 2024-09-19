export const BREAKPOINTS = {
    smallMobile: "321px",
    mobile: "577px",
    tablet: "769px",
    computer: "993px",
    desktop: "1201px",
    widescreen: "1401px",
    extraWidescreen: "1921px",
} as const;

export const BASE: number = 16

export const countReviewLines: number = 4


export const ROUTES_PATHS = {
    home: {url: "/", title: "Главная"},
    projects: {url: "projects", title: "Наши работы"},
    contacts: {url: "contacts", title: "Контакты"},
    price: {url: "price", title: "Стоимость"},
    arenda: {
        index: {url: "arenda", title: "Аренда"},
        arenda_Ekskavatora: {url: "arenda-mini-ekskavatora", title: "Аренда мини-экскаватора"},
        arenda_Gidromolota: {url: "arenda-gidromolota", title: "Аренда гидромолота"},
        arenda_Yamobura: {url: "arenda-yamobura", title: "Аренда ямобура"}
    },
    uslugi: {
        index: {url: "uslugi", title: "Услуги"},
        kopanie: {url: "kopanie", title: "Копание"},
        burenie: {url: "burenie", title: "Бурение"},
        korchevanie_Pnej: {url: "korchevanie-pnej", title: "Корчевание пней"},
        peremeshchenie_Grunta: {url: "peremeshchenie-grunta", title: "Перемещение грунта"}
    }

}


