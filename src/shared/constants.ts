import {CategoriesDataType} from './types/common.types';

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


export const MAIN_DATA: CategoriesDataType = {
    categories: {
        rental: {
            type: "rental",
            url: "arenda",
            title: 'Аренда',
            description: 'Аренда техники - превосходное решение для выполнения любого типа строительных работ в условиях ограниченного пространства. ' +
                'Они способны работать вплотную к зданиям и сооружениям, заборам, стенам, внутри зданий, то есть там, где невозможно применение крупногабаритной ' +
                'землеройной техники.' +
                'Мини стройтехника обладает высокой производительностью при малых габаритах. В ней удачно сочетаются надёжность, маневренность и проходимость, ' +
                'малое давление на грунт, значительная глубина копания и относительно большая высота разгрузки.',
            images: [],
            seo: {
                metaTitle: "Аренда техники | Лучшие цены",
                metaDescription: "Арендуйте технику для различных задач по выгодным ценам.",
                metaKeywords: "аренда техники, мини-экскаватор, гидромолот, ямобур"
            },

            items:
                {
                    'rental-exavator': {
                        id: "rental_Exavator",
                        url: "arenda-mini-exavatora",
                        title: "Аренда мини-экскаватора",
                        description: "Аренда мини-экскаватора – это востребованная услуга для работы на малых площадях и в " +
                            "стесненных условиях. Компактные многозадачные машины подходят для небольших строительных площадок." +
                            " Это действенный способ ускорить выполнение работ и сэкономить деньги. ",
                        images: [],
                        seo: {
                            metaTitle: "Аренда мини-экскаватора в Минске",
                            metaDescription: "Мини-экскаватор для работ по доступным ценам.",
                            metaKeywords: "аренда мини-экскаватора, экскаватор"
                        }
                    },
                    'rentals-hammer': {
                        id: "rentals_Hammer",
                        url: "arenda-gidromolota",
                        title: "Аренда гидромолота",
                        description: "Мы предлагаем в аренду гидромолот на базе мини-экскаватора или мини-погрузчика с опытным машинистом, " +
                            "который быстро сможет выполнить поставленную перед ним задачу.",
                        images: [],
                        seo: {
                            metaTitle: "Аренда гидромолота",
                            metaDescription: "Гидромолот для разрушительных работ по выгодным ценам.",
                            metaKeywords: "аренда гидромолота, разрушение бетона"
                        }
                    },
                    "rentals-drill": {
                        id: "rentals_Drill",
                        url: "arenda-yamobura",
                        title: "Аренда ямобура",
                        description: "Аренда ямобура (гидробура, шнекового бура) в Минске на базе мини-экскаватора" +
                            "для бурения отверстий глубиной до 2,5 м диаметром от 20 до 60 см. " +
                            "Отверстия диаметром 50 и 60 см можно пробурить глубиной до 3 м.",
                        images: [],
                        seo: {
                            metaTitle: "Аренда ямобура в Минске",
                            metaDescription: "Аренда ямобура для бурения скважин.",
                            metaKeywords: "аренда ямобура, бурение"
                        }
                    }
                }
        },
        services: {
            type: "services",
            url: "uslugi",
            title: "Услуги",
            description: "Услуги мини-экскаваторов по земляным работам, копке и бурению.",
            images: [],
            seo: {
                metaTitle: "Земляные работы и услуги",
                metaDescription: "Копка, бурение и другие земляные работы.",
                metaKeywords: "земляные работы, копка, бурение"
            },
            items:
                {
                    "digging-trench": {
                        id: "digging-trench",
                        subtype: "digging",
                        url: "kopanie-transhej",
                        title: "Копание траншей",
                        description: "Прокладка газопроводов, водопроводов, канализации, телефонных кабелей - С такой задачей лучше всего справится мини-экскаватор." +
                            "Мини-экскаваторы оснащены сменными ковшами шириной от 20 см до 1 м, позволяют копать траншеи глубиной до 2,7 м и " +
                            "производить загрузку грунта на транспортные средства высотой до 2,5 м",
                        images: [],
                        seo: {
                            metaTitle: "Копка траншей",
                            metaDescription: "Копка траншей для инженерных систем.",
                            metaKeywords: "копка траншей, земляные работы"
                        }
                    },
                    "digging-foundation": {
                        id: "digging-foundation",
                        subtype: "digging",
                        url: "kopanie-fundamentov",
                        title: "Копание фундаментов",
                        description: "Для копания фундаментов наша компания предлагает свои услуги. В любой день недели, месяца и года мы сможем " +
                            "предоставить для ваших работ свои мини-экскаваторы и специалистов высокого класса.",
                        images: [],
                        seo: {
                            metaTitle: "Копка траншей",
                            metaDescription: "Копка траншей для инженерных систем.",
                            metaKeywords: "копка траншей, земляные работы"
                        }
                    },
                    "stump-removal": {
                        id: "stump-removal",
                        subtype: "digging",
                        url: "korchevanie-pnej",
                        title: "Корчевание пней",
                        description: "Механический способ: Механическое уничтожение пней проводится с использованием специализированной " +
                            "техники, такой как гидромолот или корчеватель. Такой метод значительно быстрее и эффективнее, " +
                            "особенно когда речь идёт о крупных и старых пнях.",
                        images: [],
                        seo: {
                            metaTitle: "Копка траншей",
                            metaDescription: "Копка траншей для инженерных систем.",
                            metaKeywords: "копка траншей, земляные работы"
                        }
                    },
                    "drilling": {
                        id: "drilling",
                        subtype: "drilling",
                        url: "yamobur",
                        title: "Бурение отверстий (ям)",
                        description: "Буровые работы – важная составляющая строительства." +
                            "" +
                            "В настоящее время существует большое количество техники и оборудования, которые позволяют " +
                            "провести бурение максимально быстро, эффективно и экономически выгодно." +
                            "" +
                            "Бурение отверстий ямобуром (буром, шнековым буром) в земле необходимо при выполнении таких работ, как:" +
                            "" +
                            "- возведение фундаментов зданий (буронабивных или столбчатых);" +
                            "- установка столбов и различных опор для силовых линий и заборных столбов;" +
                            "- усиление аварийного фундамента, укрепление откосов;" +
                            "- строительство переходов, мостов и причалов, колодцев;" +
                            "- посадка небольших деревьев или кустарников.",
                        images: [],
                        seo: {
                            metaTitle: "Бурение скважин",
                            metaDescription: "Услуги по бурению скважин под ключ.",
                            metaKeywords: "бурение скважин, услуги бурения"
                        }
                    },
                    "ground-movement": {
                        id: "ground-movement",
                        url: "peremeschenie-grunta",
                        title: "Перемещение грунта",
                        description: "Услуга по перемещению грунта может понадобиться во многих ситуациях: от стройки до уборки или облагораживания " +
                            "территории. Преимущество мини-техники в ее небольших размерах и возможности использования " +
                            "в подвальных помещениях или на свайном поле для перемещения грунта или строительного мусора.",
                        images: [],
                        seo: {
                            metaTitle: "Перемещение грунта",
                            metaDescription: "Услуги перемещения грунта по доступной цене.",
                            metaKeywords: "перемещение грунта, земляные работы"
                        }
                    },
                    "other-groundworks": {
                        id: "other-groundworks",
                        subtype: "other",
                        url: "prochie-zemlyanye-raboty",
                        title: "Прочие земляные работы",
                        description: "Земляные работы с помощью мини-экскаватора и мини-погрузчика в Минске" +
                            "мы осуществляем земляные работы в Минске и окрестностях с применением современной спецтехники, ",
                        images: [],
                        seo: {
                            metaTitle: "Копка траншей",
                            metaDescription: "Копка траншей для инженерных систем.",
                            metaKeywords: "копка траншей, земляные работы"
                        }
                    },
                    "dismantling": {
                        id: "dismantling",
                        subtype: "other",
                        url: "demontazh",
                        title: "Демонтаж бетонных конструкций",
                        description: "Выполняем следующие услуги гидромолота:" +
                            "разрушение железобетонных строений;" +
                            "объемная и листовая штамповка;" +
                            "ковочные работы;" +
                            "забивка свай для фундаментов;" +
                            "трамбовка грунта;" +
                            "вскрытие подземных коммуникаций;" +
                            "прокладка тоннелей;" +
                            "разрушение пород в карьерах (вместо взрывчатки);" +
                            "подводные работы (расширение русел каналов)." +
                            "Наш опыт и оборудование позволяют нам обеспечивать качественное выполнение работ в сжатые сроки и при любых условиях.",
                        images: [],
                        seo: {
                            metaTitle: "Копка траншей",
                            metaDescription: "Копка траншей для инженерных систем.",
                            metaKeywords: "копка траншей, земляные работы"
                        }
                    },
                }
        }
    }
};


export const PROJECTS_DATA = {url: "projects", title: "Наши работы"}
export const CONTACTS_DATA = {url: "contacts", title: "Контакты"}
export const PRICES_DATA = {url: "price", title: "Стоимость"}

export const ROUTES_PATHS = {
    home: {url: "/", title: "Главная"},
    projects: {url: PROJECTS_DATA.url, title: PROJECTS_DATA.title},
    contacts: {url: CONTACTS_DATA.url, title: CONTACTS_DATA.title},
    price: {url: PRICES_DATA.url, title: PRICES_DATA.title},

    arenda: {
        index: {
            url: MAIN_DATA.categories.rental.url,
            title: MAIN_DATA.categories.rental.title
        },
        arenda_Exavatora: {
            url: MAIN_DATA.categories.rental.items["rental-exavator"].url,
            title: MAIN_DATA.categories.rental.items["rental-exavator"].title
        },
        arenda_Gidromolota: {
            url: MAIN_DATA.categories.rental.items["rentals-hammer"].url,
            title: MAIN_DATA.categories.rental.items["rentals-hammer"].title
        },
        arenda_Yamobura: {
            url: MAIN_DATA.categories.rental.items["rentals-drill"].url,
            title: MAIN_DATA.categories.rental.items["rentals-drill"].title
        },
    },
    uslugi: {
        index: {
            url: MAIN_DATA.categories.services.url,
            title: MAIN_DATA.categories.services.title,
        },
        diggingTrench: {
            url: MAIN_DATA.categories.services.items["digging-trench"].url,
            title: MAIN_DATA.categories.services.items["digging-trench"].title,
        },
        diggingFoundation: {
            url: MAIN_DATA.categories.services.items["digging-foundation"].url,
            title: MAIN_DATA.categories.services.items["digging-foundation"].title,
        },
        stumpRemoval: {
            url: MAIN_DATA.categories.services.items["stump-removal"].url,
            title: MAIN_DATA.categories.services.items["stump-removal"].title,
        },
        drilling: {
            url: MAIN_DATA.categories.services.items["drilling"].url,
            title: MAIN_DATA.categories.services.items["drilling"].title,
        },
        groundMovement: {
            url: MAIN_DATA.categories.services.items["ground-movement"].url,
            title: MAIN_DATA.categories.services.items["ground-movement"].title,
        },
        otherGroundworks: {
            url: MAIN_DATA.categories.services.items["other-groundworks"].url,
            title: MAIN_DATA.categories.services.items["other-groundworks"].title,
        },
        dismantling: {
            url: MAIN_DATA.categories.services.items["dismantling"].url,
            title: MAIN_DATA.categories.services.items["dismantling"].title,
        },
    }
}




