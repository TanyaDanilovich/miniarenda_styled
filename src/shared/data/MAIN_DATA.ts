import {MainData} from '../types/common.types';
import {CATEGORY} from '../constants/CATEGORY';
import {RENTAL_SUBCATEGORY} from '../constants/RENTAL_SUBCATEGORY';
import {SERVICE_SUBCATEGORY} from '../constants/SERVICE_SUBCATEGORY';
import {SERVICE_GROUP} from '../constants/SERVICE_GROUP';
import excavator from '../../assets/svg/exavator.svg';
import hammer from '../../assets/svg/gidromolot.svg';
import drill from '../../assets/svg/bur.svg';
import {EQUIPMENT_SUBCATEGORY} from '../constants/EQUIPMENT_SUBCATEGORY';

export const MAIN_DATA: MainData = {
    categories: {
        [CATEGORY.RENTAL]: {
            id: "category-001",
            category: CATEGORY.RENTAL,
            url: "arenda",
            i18nKey: "categories.rental",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Аренда техники | Доступные цены и гибкие условия",
                metaDescription: "Арендуйте технику для строительства и земляных работ по выгодным ценам. Мини-экскаваторы, гидромолоты и ямобуры на выбор.",
                metaKeywords: ["аренда техники", "мини-экскаватор", "гидромолот", "ямобур"]
            },

            items: [
                RENTAL_SUBCATEGORY.EXCAVATOR,
                RENTAL_SUBCATEGORY.HAMMER,
                RENTAL_SUBCATEGORY.DRILL
            ]
        },
        [CATEGORY.SERVICES]: {
            id: "category-002",
            category: CATEGORY.SERVICES,
            url: "uslugi",
            i18nKey: "categories.services",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Земляные работы и услуги мини-техники",
                metaDescription: "Предоставляем услуги мини-экскаваторов для копки, бурения и других земляных работ. Качественное выполнение в сжатые сроки.",
                metaKeywords: ["земляные работы", "копка траншей", "бурение", "мини-техника"]
            },
            items: [
                SERVICE_SUBCATEGORY.DIGGING_TRENCH,
                SERVICE_SUBCATEGORY.DIGGING_FOUNDATION,
                SERVICE_SUBCATEGORY.DRILLING,
                SERVICE_SUBCATEGORY.GROUND_MOVEMENT,
                SERVICE_SUBCATEGORY.STUMP_REMOVAL,
                SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS,
                SERVICE_SUBCATEGORY.DISMANTLING
            ],
        },
    },
    subcategories: {
        [RENTAL_SUBCATEGORY.EXCAVATOR]: {
            id: "subcategory-001",
            subcategory: RENTAL_SUBCATEGORY.EXCAVATOR,
            subcategoryUrl: "arenda-mini-exavatora",
            i18nKey: "subcategories.rentalExcavator",
            images: [{src: "", alt: ""}],
            position: 1,
            icon: excavator,
            seo: {
                metaTitle: "Аренда мини-экскаватора в Минске | Доступные цены",
                metaDescription: "Аренда мини-экскаватора для земляных работ по доступным ценам. Идеально подходит для небольших и сложных площадок.",
                metaKeywords: ["аренда мини-экскаватора", "земляные работы", "мини-техника"]
            }
        },
        [RENTAL_SUBCATEGORY.HAMMER]: {
            id: "subcategory-002",
            subcategory: RENTAL_SUBCATEGORY.HAMMER,
            subcategoryUrl: "arenda-gidromolota",
            i18nKey: "subcategories.rentalsHammer",
            images: [{src: "", alt: ""}],
            position: 2,
            icon: hammer,
            seo: {
                metaTitle: "Аренда гидромолота | Разрушительные работы",
                metaDescription: "Гидромолот в аренду для разрушения бетонных и каменных конструкций. Работаем на малых и сложных участках.",
                metaKeywords: ["аренда гидромолота", "разрушение бетона", "демонтаж"]
            }
        },
        [RENTAL_SUBCATEGORY.DRILL]: {
            id: "subcategory-003",
            subcategory: RENTAL_SUBCATEGORY.DRILL,
            subcategoryUrl: "arenda-yamobura",
            i18nKey: "subcategories.rentalsDrill",
            images: [{src: "", alt: ""}],
            position: 3,
            icon: drill,
            seo: {
                metaTitle: "Аренда ямобура в Минске | Бурение отверстий",
                metaDescription: "Аренда ямобура для бурения отверстий различного диаметра и глубины. Услуги по бурению скважин и свай.",
                metaKeywords: ["аренда ямобура", "бурение отверстий", "бурение скважин"]
            }
        },

        [SERVICE_SUBCATEGORY.DIGGING_TRENCH]: {
            id: "subcategory-004",
            subcategory: SERVICE_SUBCATEGORY.DIGGING_TRENCH,
            group: SERVICE_GROUP.DIGGING,
            position: 1,
            subcategoryUrl: "kopanie-transhej",
            i18nKey: "subcategories.diggingTrench",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Копание траншей | Прокладка коммуникаций",
                metaDescription: "Услуги по копанию траншей для прокладки инженерных коммуникаций и трубопроводов.",
                metaKeywords: ["копка траншей", "земляные работы", "прокладка труб"]
            }
        },
        [SERVICE_SUBCATEGORY.DIGGING_FOUNDATION]: {
            id: "subcategory-005",
            subcategory: SERVICE_SUBCATEGORY.DIGGING_FOUNDATION,
            group: SERVICE_GROUP.DIGGING,
            position: 2,
            subcategoryUrl: "kopanie-fundamentov",
            i18nKey: "subcategories.diggingFoundation",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Копание фундаментов | Профессиональные услуги",
                metaDescription: "Копка фундаментов под дома и другие постройки. Мини-экскаваторы для любой сложности работы.",
                metaKeywords: ["копка фундаментов", "земляные работы", "строительство"]
            }
        },
        [SERVICE_SUBCATEGORY.STUMP_REMOVAL]: {
            id: "subcategory-006",
            subcategory: SERVICE_SUBCATEGORY.STUMP_REMOVAL,
            group: SERVICE_GROUP.OTHER,
            position: 3,
            subcategoryUrl: "korchevanie-pnej",
            i18nKey: "subcategories.stumpRemoval",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Корчевание пней | Удаление корней",
                metaDescription: "Услуги по корчеванию пней с применением спецтехники. Быстрое и эффективное удаление корней.",
                metaKeywords: ["корчевание пней", "удаление корней", "земляные работы"]
            }
        },
        [SERVICE_SUBCATEGORY.DRILLING]: {
            id: "subcategory-007",
            subcategory: SERVICE_SUBCATEGORY.DRILLING,
            group: SERVICE_GROUP.DIGGING,
            position: 4,
            subcategoryUrl: "yamobur",
            i18nKey: "subcategories.drilling",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Бурение отверстий и ям | Услуги бурения в Минске",
                metaDescription: "Профессиональные услуги по бурению отверстий ямобуром для фундаментов, столбов и опор. Работаем быстро и качественно, используя современное оборудование.",
                metaKeywords: ["бурение отверстий", "бурение ям", "услуги бурения", "буронабивные фундаменты", "установка опор", "усиление фундамента", "бурение в Минске"]
            }
        },
        [SERVICE_SUBCATEGORY.GROUND_MOVEMENT]: {
            id: "subcategory-008",
            subcategory: SERVICE_SUBCATEGORY.GROUND_MOVEMENT,
            group: SERVICE_GROUP.OTHER,
            position: 5,
            subcategoryUrl: "peremeschenie-grunta",
            i18nKey: "subcategories.groundMovement",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Перемещение грунта | Земляные работы",
                metaDescription: "Услуги по перемещению грунта с использованием мини-техники. Работаем на любых участках.",
                metaKeywords: ["перемещение грунта", "земляные работы", "мини-техника"]
            }
        },
        [SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS]: {
            id: "subcategory-009",
            subcategory: SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS,
            group: SERVICE_GROUP.OTHER,
            position: 6,
            subcategoryUrl: "prochie-zemlyanye-raboty",
            i18nKey: "subcategories.otherGroundworks",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Прочие земляные работы | Мини-экскаваторы",
                metaDescription: "Земляные работы различной сложности с использованием мини-экскаваторов. Оперативное выполнение задач.",
                metaKeywords: ["земляные работы", "мини-экскаватор", "строительные услуги"]
            }
        },
        [SERVICE_SUBCATEGORY.DISMANTLING]: {
            id: "subcategory-010",
            subcategory: SERVICE_SUBCATEGORY.DISMANTLING,
            group: SERVICE_GROUP.OTHER,
            position: 7,
            subcategoryUrl: "demontazh",
            i18nKey: "subcategories.dismantling",
            images: [{src: "", alt: ""}],
            seo: {
                metaTitle: "Демонтаж бетонных и железобетонных конструкций | Разрушительные работы",
                metaDescription: "Профессиональный демонтаж бетонных с помощью гидромолота. Разрушение сооружений, вскрытие подземных коммуникаций.",
                metaKeywords: ["демонтаж конструкций", "разрушение бетона", "разрушение железобетона", "услуги гидромолота", "забивка свай", "разрушение пород"]
            }
        },
    },
    subcategoryItemCards: {
        [RENTAL_SUBCATEGORY.HAMMER]: [
            {
                id: "card-001",
                position: 1,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card001",
            },
            {
                id: "card-002",
                position: 2,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card002",
            },
            {
                id: "card-003",
                position: 3,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card003",
            },
            {
                id: "card-004",
                position: 4,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card004",
            },
            {
                id: "card-005",
                position: 5,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card005",
            },
            {
                id: "card-006",
                position: 6,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card006",
            },
            {
                id: "card-007",
                position: 7,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card007",
            },
            {
                id: "card-008",
                position: 8,
                images: [{src: "", alt: ""}],
                i18nKey: "subcategoryItemCards.rentalsHammer.card008",
            },
        ]
    },

    equipments: {
        [EQUIPMENT_SUBCATEGORY.HAMMER]: {
            id: "equipment-001",
            i18nKey: "equipments.hammer",
            image: {src: "", alt: ""},
            position: 2
        },
        [EQUIPMENT_SUBCATEGORY.DRILL]: {
            id: "equipment-002",
            i18nKey: "equipments.drill",
            image: {src: "", alt: ""},
            position: 3
        },
        [EQUIPMENT_SUBCATEGORY.FANG]: {
            id: "equipment-003",
            i18nKey: "equipments.fang",
            image: {src: "", alt: ""},
            position: 1
        },
        [EQUIPMENT_SUBCATEGORY.BUCKETS]: {
            id: "equipment-004",
            i18nKey: "equipments.buckets",
            image: {src: "", alt: ""},
            position: 4
        },

    }
};