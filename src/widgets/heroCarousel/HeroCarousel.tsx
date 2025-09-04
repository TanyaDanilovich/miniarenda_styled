import {heroData} from '../hero/heroData';
import {HeroSlide} from './HeroSlide';
import styled from 'styled-components';
import {
    S_AppCarouselArrowButtonsContainer,
    S_AppCarouselDotsContainer
} from '../../shared/ui/slider/appCarouselStyle';
import type {EmblaOptionsType} from 'embla-carousel';
import {AppCarousel} from '../../shared/ui/slider/AppCarousel';
import {useDebouncedWindowSize} from '../../shared/hooks/useDebounsedWindowSize';

export const HeroCarousel = () => {
    const carouselOptions: EmblaOptionsType = {
        loop: true,
        //align: 'center',
        slidesToScroll: 1  // Явно указываем
    }
    const {height} = useDebouncedWindowSize();
    console.log("HeroCarousel - ",height)

    const autoplayConfig = {
        delay: 8000,
        stopOnInteraction: false,
        jump: false  // Плавный переход
    }

    return (
        <S_HeroCarousel as={AppCarousel} id = "main-hero-carousel"
                        options = {carouselOptions}
                        autoplay = {autoplayConfig}
                        showDots = {true}
                        showArrows = {true}
                        $height={height}
        >
            {heroData.map((slide, index) => <HeroSlide {...slide} index = {index} key = {index}/>)}
        </S_HeroCarousel>
    )
}

const S_HeroCarousel = styled.section`

    

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