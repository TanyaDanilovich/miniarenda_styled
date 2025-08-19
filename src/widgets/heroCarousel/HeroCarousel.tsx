import {heroData} from '../hero/heroData';
import {HeroSlide} from './HeroSlide';
import styled from 'styled-components';
import {AppCarousel, S_AppCarouselContainer} from '../../shared/ui/slider/AppCarousel';
import type {EmblaOptionsType} from 'embla-carousel';


export const HeroCarousel = () => {
    const carouselOptions: EmblaOptionsType = {
        loop: true,
        align: 'center',
        slidesToScroll: 1  // Явно указываем
    }

    // Настройки автопрокрутки с debounce
    const autoplayConfig = {
        delay: 2000,
        stopOnInteraction: false,
        jump: false  // Плавный переход
    }

    return (
        <S_HeroCarousel
            id = "main-hero-carousel"
            options = {carouselOptions}
            autoplay = {autoplayConfig}
            showDots = {true}
            showArrows = {true}
        >
            {heroData.map((slide, index) => <HeroSlide {...slide} index = {index} key = {index}/>)}
        </S_HeroCarousel>
    )
}

const S_HeroCarousel = styled(AppCarousel)`
    width:100%;
    height:100%;

    ${S_AppCarouselContainer}{
        // Убедитесь что контейнер растягивается на всю высоту
        height:100%;
    }

    // Добавьте если нужно ограничить максимальную ширину
    max-width:1200px;
    margin:0 auto;
`