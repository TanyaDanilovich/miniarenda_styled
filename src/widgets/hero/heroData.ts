import {type ImageProps} from '../../shared/types/common.types';
import imgSlide1_1920w from '../../assets/images/hero-slider/1920px/webp/DSC2623-1920w.webp';
import imgSlide1_480w from '../../assets/images/hero-slider/480px/webp/DSC2623-480w.webp';
import imgSlide1_768w from '../../assets/images/hero-slider/768px/webp/DSC2623-768w.webp';
import imgSlide1_1200w from '../../assets/images/hero-slider/1200px/webp/DSC2623-1200w.webp';

import imgSlide2_1920w from '../../assets/images/hero-slider/1920px/webp/DSC4666-1920w.webp';
import imgSlide2_480w from '../../assets/images/hero-slider/480px/webp/DSC4666-480w.webp';
import imgSlide2_768w from '../../assets/images/hero-slider/768px/webp/DSC4666-768w.webp';
import imgSlide2_1200w from '../../assets/images/hero-slider/1200px/webp/DSC4666-1200w.webp';

import imgSlide3_1920w from '../../assets/images/hero-slider/1920px/webp/DSC4349-1920w.webp';
import imgSlide3_480w from '../../assets/images/hero-slider/480px/webp/DSC4349-480w.webp';
import imgSlide3_768w from '../../assets/images/hero-slider/768px/webp/DSC4349-768w.webp';
import imgSlide3_1200w from '../../assets/images/hero-slider/1200px/webp/DSC4349-1200w.webp';


// import img1920w from "../../assets/images/test/1920.jpg"
// import img1200w from "../../assets/images/test/1200.jpg"
// import img768w from "../../assets/images/test/768.jpg"
// import img480w from "../../assets/images/test/480.jpg"
type HeroSlideData = {
    mainText: string,
    additionalText: string,
    image: ImageProps
}

export const heroData: HeroSlideData[] = [
    {
        mainText: "Аренда мини-экскаватора с гидромолотом и ямобуром",
        additionalText: "Доставка по Минску и Минской области",
        image: {
            src: imgSlide1_1920w,
            srcSet: {
                '480': imgSlide1_480w,
                '768': imgSlide1_768w,
                '1200': imgSlide1_1200w
                // src: img1920w,
                // srcSet: {
                //     '480': img480w,
                //     '768': img768w,
                //     '1200': img1200w
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
                '1200': imgSlide2_1200w
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
                '1200': imgSlide3_1200w
            },
            alt: "Аренда мини-экскаватора с гидромолотом в Минске и Минской области"
        }
    },
    // {
    //     mainText: "100 % клиентов довольны качеством и ценой",
    //     additionalText: "Работаем без выходных и праздников, 7 дней в неделю",
    //     imgUrl: "../../assets/images/main-slider/1920px/webp/_DSC4764-1920wwebp"
    // },


];