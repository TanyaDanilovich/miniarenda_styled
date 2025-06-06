import {ImageProps} from '../../shared/types/common.types';


type HeroSlideData = {
    mainText: string,
    additionalText: string,
    //image:ImageProps
}


export const heroData: HeroSlideData[] = [
    {
        mainText: "Аренда мини-экскаватора с гидромолотом и ямобуром",
        additionalText: "Доставка по Минску и Минской области",
        // image: {
        //     src:`${process.env.PUBLIC_URL}/1920px/_DSC2623-1920w.jpg`,
        //     alt: "Аренда мини-экскаватора с гидромолотом и ямобуром"
        // }
    },
    {
        mainText: "Услуги мини-экскаваторов в Минске и Минской области",
        additionalText: "от 85 руб в час, от 4 часов",
        // image: {
        //     src:imgSlide2,
        //     alt: "Аренда мини-экскаватора с ямобуром в Минске и Минской области"
        // }
    },
    {
        mainText: "Работаем с частными лицами и с организациями",
        additionalText: "Наличный и безналичный расчет ",
        // image: {
        //     src:imgSlide3,
        //     alt: "Аренда мини-экскаватора с гидромолотом в Минске и Минской области"
        // }
    },
    // {
    //     mainText: "100 % клиентов довольны качеством и ценой",
    //     additionalText: "Работаем без выходных и праздников, 7 дней в неделю",
    //     imgUrl: "../../assets/images/main-slider/1920px/_DSC4764-1920w.jpg"
    // },


];