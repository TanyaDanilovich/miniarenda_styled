import img2 from '../../assets/images/servises/servises_2.jpg'
import {MachineryData} from '../types/common.types';
import {v1} from 'uuid';
import {MACHINERY_CHARACTERISTICS} from '../constants/MACHINERY_CHARACTERISTICS';
import {MACHINERY_PRICE_CHARACTERISTICS} from '../constants/MACHINERY_PRICE_CHARACTERISTICS';


export const machineriesData: MachineryData[] = [
    {
        id: v1(),
        title: "Технические характеристики мини экскаватора Wacker Neuson ET-14",
        tableTitle: "Мини-экскаватор Wacker Neuson ET-14",
        image: {src: img2, alt: "Мини-экскаватор Wacker Neuson ET-14"},
        characteristics: [
            {id: MACHINERY_CHARACTERISTICS.WEIGHT, title: "Масса", value: "1500 кг"},
            {id: MACHINERY_CHARACTERISTICS.DIMENSION, title: "Габаритные размеры", value: "3854х990х2289 м"},
            {id: MACHINERY_CHARACTERISTICS.DIGGING_DEPTH, title: "Глубина копания", value: "до 2 м"},
            {id: MACHINERY_CHARACTERISTICS.DRILLING_DEPTH, title: "Глубина бурения", value: "до 2,5 м"},
            {id: MACHINERY_CHARACTERISTICS.SPEED, title: "Скорость передвижения макс.", value: "5 км/ч"},
            {id: MACHINERY_CHARACTERISTICS.WIDTH, title: "Ширина гусеницы", value: "230 мм"},
            {id: MACHINERY_CHARACTERISTICS.CLEARANCE, title: "Дорожный просвет", value: "210 мм"},
            {id: MACHINERY_CHARACTERISTICS.BUCKETS, title: "Ковши", value: "150, 300, 400, 600, 1000 мм"},
            {id: MACHINERY_CHARACTERISTICS.AUGERS, title: "Шнеки", value: "200, 250, 300, 350, 400, 500, 600 мм"},
            {id: MACHINERY_CHARACTERISTICS.COUNTRY, title: "Страна производства", value: "Германия"}],
        priceCharacteristics: [
            {id: MACHINERY_PRICE_CHARACTERISTICS.PRICE, title: "Цена", value: "от 75 руб/час"},
            {id: MACHINERY_PRICE_CHARACTERISTICS.MINIMUM_ORDER, title: "Минимальный заказ", value: "4 часа"},
            {id: MACHINERY_PRICE_CHARACTERISTICS.CASHLESS_MINIMUM_ORDER, title: "Минимальный заказ (безнал)", value: "8 часов"},
            {id: MACHINERY_PRICE_CHARACTERISTICS.BUSINESS_HOURS, title: "Время работы", value: "с 8:00 до 22:00 без выходных"},
        ],
    },
    {
        id: v1(),
        title: "Технические характеристики мини экскаватора Wacker Neuson ET-24",
        tableTitle: "Мини-экскаватор Wacker Neuson ET-24",
        image: {src: img2, alt: "Мини-экскаватор Wacker Neuson ET-24"},
        characteristics: [
            {id: MACHINERY_CHARACTERISTICS.WEIGHT, title: "Масса", value: "2500  кг"},
            {id: MACHINERY_CHARACTERISTICS.DIMENSION, title: "Габаритные размеры", value: "4022х1400х2390  м"},
            {id: MACHINERY_CHARACTERISTICS.DIGGING_DEPTH, title: "Глубина копания", value: "до 2,5 м"},
            {id: MACHINERY_CHARACTERISTICS.DRILLING_DEPTH, title: "Глубина бурения", value: "до 3 м"},
            {id: MACHINERY_CHARACTERISTICS.SPEED, title: "Скорость передвижения макс.", value: "4 км/ч"},
            {id: MACHINERY_CHARACTERISTICS.WIDTH, title: "Ширина гусеницы", value: "295 мм"},
            {id: MACHINERY_CHARACTERISTICS.CLEARANCE, title: "Дорожный просвет", value: "210 мм"},
            {id: MACHINERY_CHARACTERISTICS.BUCKETS, title: "Ковши", value: "150, 300, 400, 600, 1000 мм"},
            {id: MACHINERY_CHARACTERISTICS.AUGERS, title: "Шнеки", value: "200, 250, 300, 350, 400, 500, 600 мм"},
            {id: MACHINERY_CHARACTERISTICS.COUNTRY, title: "Страна производства", value: "Германия"}],
        priceCharacteristics: [
            {id: MACHINERY_PRICE_CHARACTERISTICS.PRICE, title: "Цена", value: "от 75 руб/час"},
            {id: MACHINERY_PRICE_CHARACTERISTICS.MINIMUM_ORDER, title: "Минимальный заказ", value: "4 часа"},
            {id: MACHINERY_PRICE_CHARACTERISTICS.CASHLESS_MINIMUM_ORDER, title: "Минимальный заказ (безнал)", value: "8 часов"},
            {id: MACHINERY_PRICE_CHARACTERISTICS.BUSINESS_HOURS, title: "Время работы", value: "с 8:00 до 22:00 без выходных"},
        ],
    }
]