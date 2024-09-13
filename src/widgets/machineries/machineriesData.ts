import img2 from '../../assets/images/servises/servises_2.jpg'
import {machineryCardData} from './machneryCard/MachneryCard';

export const machineriesData: machineryCardData[] = [
    {
        title: "Технические характеристики мини экскаватора Wacker Neuson ET-14",
        image: {src: img2, alt: "мини-экскаватор"},
        characteristics: [
            {id: "weight", title: "Масса", value: "1500 кг"},
            {id: "dimensions", title: "Габаритные размеры", value: "3854х990х2289 м"},
            {id: "drillingDepth", title: "Глубина бурения", value: "до 2500 м"},
            {id: "speed", title: "Скорость передвижения макс.", value: "5 км/ч"},
            {id: "width", title: "Ширина гусеницы", value: "230 мм"},
            {id: "clearance", title: "Дорожный просвет", value: "210 мv"},
            {id: "augers", title: "Шнеки", value: "200, 250, 300, 350, 400, 500, 600 м"},
            {id: "country", title: "Страна производства", value: "Германия"}],

    },
    {
        title: "Технические характеристики мини экскаватора Wacker Neuson ET-24",
        image: {src: img2, alt: "мини-экскаватор"},
        characteristics: [
            {id: "weight", title: "Масса", value: "2500  кг"},
            {id: "dimensions", title: "Габаритные размеры", value: "4022х1400х2390  м"},
            {id: "drillingDepth", title: "Глубина бурения", value: "до 3000 м"},
            {id: "speed", title: "Скорость передвижения макс.", value: "4 км/ч"},
            {id: "width", title: "Ширина гусеницы", value: "295 мм"},
            {id: "clearance", title: "Дорожный просвет", value: "210 мv"},
            {id: "augers", title: "Шнеки", value: "200, 250, 300, 350, 400, 500, 600 м"},
            {id: "country", title: "Страна производства", value: "Германия"}],

    }
]