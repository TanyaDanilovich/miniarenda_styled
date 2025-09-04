import {heroData} from '../hero/heroData';
import {HeroSlide} from './HeroSlide';
import styled from 'styled-components';
import {
    S_AppCarouselArrowButtonsContainer,
    S_AppCarouselDotsContainer
} from '../../shared/ui/slider/appCarouselStyle';
import type {EmblaOptionsType} from 'embla-carousel';
import {AppCarousel} from '../../shared/ui/slider/AppCarousel';

export const HeroCarousel = () => {
    const carouselOptions: EmblaOptionsType = {
        loop: true,
        //align: 'center',
        slidesToScroll: 1  // Явно указываем
    }

    // Настройки автопрокрутки с debounce
    const autoplayConfig = {
        delay: 8000,
        stopOnInteraction: false,
        jump: false  // Плавный переход
    }

    return (
        <S_HeroCarousel id = "main-hero-carousel"
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

    height:80svh;

    ${S_AppCarouselArrowButtonsContainer}{
        justify-content:space-between;
    }

    ${S_AppCarouselDotsContainer}{
        bottom:-5%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`