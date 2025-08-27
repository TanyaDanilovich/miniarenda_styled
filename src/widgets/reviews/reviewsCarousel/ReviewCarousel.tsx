import type {EmblaOptionsType} from 'embla-carousel';
import {reviewsData} from '../reviewData';
import {ReviewSlide} from './ReviewSlide';
import styled from 'styled-components';
import {AppCarousel} from '../../../shared/ui/slider/AppCarousel';
import {
    S_AppCarouselArrowButtonsContainer, S_AppCarouselContainer,
    S_AppCarouselDotsContainer
} from '../../../shared/ui/slider/appCarouselStyle';
import {useCallback, useState} from 'react';
import {S_AppCarouselArrowButton} from '../../../shared/ui/slider/CarouselArrowButtons';


export const ReviewCarousel = () => {
    const [close, setClose] = useState<boolean | null>(null)
    const resetClose = () => setClose(null)

    const carouselOptions: EmblaOptionsType = {
        loop: true,
        //align: 'center',
        slidesToScroll: 1,
        // breakpoints: {
        //     '(min-width: 576px)': {slidesToScroll: 2}
        // }
    }

    // Настройки автопрокрутки с debounce
    const autoplayConfig = {
        delay: 2000,
        stopOnInteraction: false,
        jump: false  // Плавный переход
    }

    const onSlideChange = useCallback(() => setClose(true), []);

    return (
        <S_ReviewsCarousel id = "reviews-carousel"
                           options = {carouselOptions}
                           autoplay = {autoplayConfig}
                           showDots = {false}
                           showArrows = {true}
                           callback = {onSlideChange} // Передаем колбек
                           eventType = "select" // Слушаем событие выбора слайда
        >
            {reviewsData.map((review, index) =>
                <ReviewSlide userName = {review.userName}
                             reviewContent = {review.reviewContent}
                             close = {close}
                             resetClose = {resetClose}
                             key = {`reviews-carousel-${index}`}
                />)}
        </S_ReviewsCarousel>
    )
}

const S_ReviewsCarousel = styled(AppCarousel)`

    height:100%;
    padding-bottom:2rem;
    gap:2rem;

    ${S_AppCarouselContainer}{
        column-gap:2rem;
        @media ${({theme}) => theme.mediaMinWidth.largeMobile}{
            column-gap:1rem;
        }
    }

    ${S_AppCarouselArrowButtonsContainer}{
        justify-content:right;
        top:0;
        gap:2rem;
    }

    ${S_AppCarouselDotsContainer}{
        bottom:-5%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    ${S_AppCarouselArrowButton}{
        width:2rem;
    }

`