import {heroData} from '../hero/heroData';
import {HeroSlide} from './HeroSlide';
import styled from 'styled-components';
import {
    S_AppCarouselArrowButtonsContainer,
    S_AppCarouselDotsContainer,
    S_AppCarouselWrapper
} from '../../shared/ui/slider/appCarouselStyle';
import type {EmblaOptionsType} from 'embla-carousel';
import {useDebouncedWindowSize} from '../../shared/hooks/useDebounsedWindowSize';
import {AppCarousel, type CarouselAutoplayOptions} from '../../shared/ui/slider/AppCarousel';


export type HeroCarouselProps = {
    className?: string,
}

export const HeroCarousel = ({className}: HeroCarouselProps) => {
    const carouselOptions: EmblaOptionsType = {
        loop: true,
        //align: 'center',
        slidesToScroll: 1  // Явно указываем
    }
    const {width, height} = useDebouncedWindowSize();
    console.log("HeroCarousel - ", height)

    const autoplayConfig: CarouselAutoplayOptions = {
        delay: 8000,
        stopOnInteraction: false,
        jump: false,
        playOnInit: false,
        stopOnMouseEnter:true
    }

    return (
        <S_HeroCarousel id = {"main-hero-carousel"} className = {className} $height = {height * 0.93} $width = {width}>
            <AppCarousel options = {carouselOptions}
                         autoplay = {autoplayConfig}
                         showDots = {true}
                         showArrows = {true}>
                {heroData.map((slide, index) => <HeroSlide {...slide} index = {index} key = {index}/>)}
            </AppCarousel>
        </S_HeroCarousel>
    )
}

const S_HeroCarousel = styled(S_AppCarouselWrapper)<{ $width?: number }>`
    aspect-ratio:${({$height, $width}) => `${$height}/${$width}` || "1/1"};

    ${S_AppCarouselArrowButtonsContainer}{
        justify-content:space-between;
    }

    ${S_AppCarouselDotsContainer}{
        bottom:5%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`