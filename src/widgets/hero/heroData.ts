import {ImageProps} from '../../shared/types/common.types';
import imgSlide1_1920w from '../../assets/images/hero-slider/1920px/DSC2623-1920w.jpg';
import imgSlide1_480w from '../../assets/images/hero-slider/480px/DSC2623-480w.jpg';
import imgSlide1_768w from '../../assets/images/hero-slider/768px/DSC2623-768w.jpg';
import imgSlide1_1280w from '../../assets/images/hero-slider/1200px/DSC2623-1200w.jpg';

import imgSlide2_1920w from '../../assets/images/hero-slider/1920px/DSC4666-1920w.jpg';
import imgSlide2_480w from '../../assets/images/hero-slider/480px/DSC4666-480w.jpg';
import imgSlide2_768w from '../../assets/images/hero-slider/768px/DSC4666-768w.jpg';
import imgSlide2_1280w from '../../assets/images/hero-slider/1200px/DSC4666-1200w.jpg';

import imgSlide3_1920w from '../../assets/images/hero-slider/1920px/DSC4349-1920w.jpg';
import imgSlide3_480w from '../../assets/images/hero-slider/480px/DSC4349-480w.jpg';
import imgSlide3_768w from '../../assets/images/hero-slider/768px/DSC4349-768w.jpg';
import imgSlide3_1280w from '../../assets/images/hero-slider/1200px/DSC4349-1200w.jpg';

type HeroSlideData = {
    mainText: string,
    additionalText: string,
    image: ImageProps
}


export const heroData: HeroSlideData[] = [
    {
        mainText: "Аренда мини-экскаватора с гидромолотом и ямобуром Версия 2",
        additionalText: "Доставка по Минску и Минской области",
        image: {
            src: imgSlide1_1920w,
            srcSet: {
                '480': imgSlide1_480w,
                '768': imgSlide1_768w,
                '1280': imgSlide1_1280w
            },
            alt: "Аренда мини-экскаватора с гидромолотом и ямобуром"
        }
    },
    {
        mainText: "Услуги мини-экскаваторов в Минске и Минской области",
        additionalText: "от 85 руб в час, от 4 часов",
        image: {
            src: imgSlide2_1920w,
            srcSet: {
                '480': imgSlide2_480w,
                '768': imgSlide2_768w,
                '1280': imgSlide2_1280w
            },
            alt: "Аренда мини-экскаватора с ямобуром в Минске и Минской области"
        }
    },
    {
        mainText: "Работаем с частными лицами и с организациями",
        additionalText: "Наличный и безналичный расчет ",
        image: {
            src: imgSlide3_1920w,
            srcSet: {
                '480': imgSlide3_480w,
                '768': imgSlide3_768w,
                '1280': imgSlide3_1280w
            },
            alt: "Аренда мини-экскаватора с гидромолотом в Минске и Минской области"
        }
    },
    // {
    //     mainText: "100 % клиентов довольны качеством и ценой",
    //     additionalText: "Работаем без выходных и праздников, 7 дней в неделю",
    //     imgUrl: "../../assets/images/main-slider/1920px/_DSC4764-1920w.jpg"
    // },


];