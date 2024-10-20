import {MainData} from '../types/common.types';
import {v1} from 'uuid';
import {CATEGORY} from '../constants/CATEGORY';
import {RENTAL_SUBCATEGORY} from '../constants/RENTAL_SUBCATEGORY';
import {SERVICE_SUBCATEGORY} from '../constants/SERVICE_SUBCATEGORY';
import {SERVICE_GROUP} from '../constants/SERVICE_GROUP';
import excavator from '../../assets/svg/exavator.svg';
import hammer from '../../assets/svg/gidromolot.svg';
import drill from '../../assets/svg/bur.svg';

export const MAIN_DATA: MainData = {
    categories: {
        [CATEGORY.RENTAL]: {
            id: v1(),
            category: CATEGORY.RENTAL,
            url: "arenda",
            title: 'Аренда',
            description: 'Аренда техники - превосходное решение для выполнения любого типа строительных работ в условиях ограниченного пространства. ' +
                'Они способны работать вплотную к зданиям и сооружениям, заборам, стенам, внутри зданий, то есть там, где невозможно применение крупногабаритной ' +
                'землеройной техники.' +
                'Мини стройтехника обладает высокой производительностью при малых габаритах. В ней удачно сочетаются надёжность, маневренность и проходимость, ' +
                'малое давление на грунт, значительная глубина копания и относительно большая высота разгрузки.',
            images: [],
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
            id: v1(),
            category: CATEGORY.SERVICES,
            url: "uslugi",
            title: "Услуги",
            description: "Услуги мини-экскаваторов по земляным работам, копке и бурению.",
            images: [],
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
    subcategoryItems: {
        [RENTAL_SUBCATEGORY.EXCAVATOR]: {
            id: v1(),
            subcategory: RENTAL_SUBCATEGORY.EXCAVATOR,
            subcategoryUrl: "arenda-mini-exavatora",
            subcategoryTitle: "Аренда мини-экскаватора",
            description: "Аренда мини-экскаватора – это востребованная услуга для работы на малых площадях и в " +
                "стесненных условиях. Компактные многозадачные машины подходят для небольших строительных площадок." +
                " Это действенный способ ускорить выполнение работ и сэкономить деньги. ",
            images: [],
            position: 1,
            seo: {
                metaTitle: "Аренда мини-экскаватора в Минске | Доступные цены",
                metaDescription: "Аренда мини-экскаватора для земляных работ по доступным ценам. Идеально подходит для небольших и сложных площадок.",
                metaKeywords: ["аренда мини-экскаватора", "земляные работы", "мини-техника"]
            },
            icon: excavator
        },
        [RENTAL_SUBCATEGORY.HAMMER]: {
            id: v1(),
            subcategory: RENTAL_SUBCATEGORY.HAMMER,
            subcategoryUrl: "arenda-gidromolota",
            subcategoryTitle: "Аренда гидромолота",
            description: "Мы предлагаем в аренду гидромолот на базе мини-экскаватора или мини-погрузчика с опытным машинистом, " +
                "который быстро сможет выполнить поставленную перед ним задачу.",
            images: [],
            position: 2,
            seo: {
                metaTitle: "Аренда гидромолота | Разрушительные работы",
                metaDescription: "Гидромолот в аренду для разрушения бетонных и каменных конструкций. Работаем на малых и сложных участках.",
                metaKeywords: ["аренда гидромолота", "разрушение бетона", "демонтаж"]
            },
            icon: hammer
        },
        [RENTAL_SUBCATEGORY.DRILL]: {
            id: v1(),
            subcategory: RENTAL_SUBCATEGORY.DRILL,
            subcategoryUrl: "arenda-yamobura",
            subcategoryTitle: "Аренда ямобура",
            description: "Аренда ямобура (гидробура, шнекового бура) в Минске на базе мини-экскаватора" +
                "для бурения отверстий глубиной до 2,5 м диаметром от 20 до 60 см. " +
                "Отверстия диаметром 50 и 60 см можно пробурить глубиной до 3 м.",
            images: [],
            position: 3,
            seo: {
                metaTitle: "Аренда ямобура в Минске | Бурение отверстий",
                metaDescription: "Аренда ямобура для бурения отверстий различного диаметра и глубины. Услуги по бурению скважин и свай.",
                metaKeywords: ["аренда ямобура", "бурение отверстий", "бурение скважин"]
            },
            icon: drill
        },
        [SERVICE_SUBCATEGORY.DIGGING_TRENCH]: {
            id: v1(),
            subcategory: SERVICE_SUBCATEGORY.DIGGING_TRENCH,
            group: SERVICE_GROUP.DIGGING,
            position: 1,
            subcategoryUrl: "kopanie-transhej",
            subcategoryTitle: "Копание траншей",
            description: "Прокладка газопроводов, водопроводов, канализации, телефонных кабелей - С такой задачей лучше всего справится мини-экскаватор." +
                "Мини-экскаваторы оснащены сменными ковшами шириной от 20 см до 1 м, позволяют копать траншеи глубиной до 2,7 м и " +
                "производить загрузку грунта на транспортные средства высотой до 2,5 м",
            images: [],
            seo: {
                metaTitle: "Копание траншей | Прокладка коммуникаций",
                metaDescription: "Услуги по копанию траншей для прокладки инженерных коммуникаций и трубопроводов.",
                metaKeywords: ["копка траншей", "земляные работы", "прокладка труб"]
            }
        },
        [SERVICE_SUBCATEGORY.DIGGING_FOUNDATION]: {
            id: v1(),
            subcategory: SERVICE_SUBCATEGORY.DIGGING_FOUNDATION,
            group: SERVICE_GROUP.DIGGING,
            position: 2,
            subcategoryUrl: "kopanie-fundamentov",
            subcategoryTitle: "Копание фундаментов",
            description: "Для копания фундаментов наша компания предлагает свои услуги. В любой день недели, месяца и года мы сможем " +
                "предоставить для ваших работ свои мини-экскаваторы и специалистов высокого класса.",
            images: [],
            seo: {
                metaTitle: "Копание фундаментов | Профессиональные услуги",
                metaDescription: "Копка фундаментов под дома и другие постройки. Мини-экскаваторы для любой сложности работы.",
                metaKeywords: ["копка фундаментов", "земляные работы", "строительство"]
            }
        },
        [SERVICE_SUBCATEGORY.STUMP_REMOVAL]: {
            id: v1(),
            subcategory: SERVICE_SUBCATEGORY.STUMP_REMOVAL,
            group: SERVICE_GROUP.OTHER,
            position: 3,
            subcategoryUrl: "korchevanie-pnej",
            subcategoryTitle: "Корчевание пней",
            description: "Механический способ: Механическое уничтожение пней проводится с использованием специализированной " +
                "техники, такой как гидромолот или корчеватель. Такой метод значительно быстрее и эффективнее, " +
                "особенно когда речь идёт о крупных и старых пнях.",
            images: [],
            seo: {
                metaTitle: "Корчевание пней | Удаление корней",
                metaDescription: "Услуги по корчеванию пней с применением спецтехники. Быстрое и эффективное удаление корней.",
                metaKeywords: ["корчевание пней", "удаление корней", "земляные работы"]
            }
        },
        [SERVICE_SUBCATEGORY.DRILLING]: {
            id: v1(),
            subcategory: SERVICE_SUBCATEGORY.DRILLING,
            group: SERVICE_GROUP.DIGGING,
            position: 4,
            subcategoryUrl: "yamobur",
            subcategoryTitle: "Бурение отверстий (ям)",
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
                metaTitle: "Бурение отверстий и ям | Услуги бурения в Минске",
                metaDescription: "Профессиональные услуги по бурению отверстий ямобуром для фундаментов, столбов и опор. Работаем быстро и качественно, используя современное оборудование.",
                metaKeywords: ["бурение отверстий", "бурение ям", "услуги бурения", "буронабивные фундаменты", "установка опор", "усиление фундамента", "бурение в Минске"]
            }
        },
        [SERVICE_SUBCATEGORY.GROUND_MOVEMENT]: {
            id: v1(),
            subcategory: SERVICE_SUBCATEGORY.GROUND_MOVEMENT,
            group: SERVICE_GROUP.OTHER,
            position: 5,
            subcategoryUrl: "peremeschenie-grunta",
            subcategoryTitle: "Перемещение грунта",
            description: "Услуга по перемещению грунта может понадобиться во многих ситуациях: от стройки до уборки или облагораживания " +
                "территории. Преимущество мини-техники в ее небольших размерах и возможности использования " +
                "в подвальных помещениях или на свайном поле для перемещения грунта или строительного мусора.",
            images: [],
            seo: {
                metaTitle: "Перемещение грунта | Земляные работы",
                metaDescription: "Услуги по перемещению грунта с использованием мини-техники. Работаем на любых участках.",
                metaKeywords: ["перемещение грунта", "земляные работы", "мини-техника"]
            }
        },
        [SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS]: {
            id: v1(),
            subcategory: SERVICE_SUBCATEGORY.OTHER_GROUNDWORKS,
            group: SERVICE_GROUP.OTHER,
            position: 6,
            subcategoryUrl: "prochie-zemlyanye-raboty",
            subcategoryTitle: "Прочие земляные работы",
            description: "Земляные работы с помощью мини-экскаватора и мини-погрузчика в Минске" +
                "мы осуществляем земляные работы в Минске и окрестностях с применением современной спецтехники, ",
            images: [],
            seo: {
                metaTitle: "Прочие земляные работы | Мини-экскаваторы",
                metaDescription: "Земляные работы различной сложности с использованием мини-экскаваторов. Оперативное выполнение задач.",
                metaKeywords: ["земляные работы", "мини-экскаватор", "строительные услуги"]
            }
        },
        [SERVICE_SUBCATEGORY.DISMANTLING]: {
            id: v1(),
            subcategory: SERVICE_SUBCATEGORY.DISMANTLING,
            group: SERVICE_GROUP.OTHER,
            position: 7,
            subcategoryUrl: "demontazh",
            subcategoryTitle: "Демонтаж бетонных конструкций",
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
                metaTitle: "Демонтаж бетонных и железобетонных конструкций | Разрушительные работы",
                metaDescription: "Профессиональный демонтаж бетонных с помощью гидромолота. Разрушение сооружений, вскрытие подземных коммуникаций.",
                metaKeywords: ["демонтаж конструкций", "разрушение бетона", "разрушение железобетона", "услуги гидромолота", "забивка свай", "разрушение пород"]
            }
        },
    },

};