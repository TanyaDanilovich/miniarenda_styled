import type {EmblaOptionsType} from 'embla-carousel';
import {reviewsData} from '../reviewData';
import {ReviewSlide} from './ReviewSlide';
import styled from 'styled-components';
import {AppCarousel} from '../../../shared/ui/slider/AppCarousel';
import {
    S_AppCarouselArrowButtonsContainer,
    S_AppCarouselDotsContainer
} from '../../../shared/ui/slider/appCarouselStyle';
import {useCallback, useState} from 'react';

export const ReviewsCarousel = () => {
    const [close, setClose] = useState<boolean | null>(null)
    const resetClose = () => setClose(null)

    const carouselOptions: EmblaOptionsType = {
        loop: true,
        //align: 'center',
        slidesToScroll: 1  // Явно указываем
    }

    // Настройки автопрокрутки с debounce
    const autoplayConfig = {
        delay: 2000,
        stopOnInteraction: false,
        jump: false  // Плавный переход
    }


    const onSlideChange = useCallback(() => {
        resetClose()
        console.log('resetClose()')
    }, []);

    console.log('close', close)
    return (
        <S_ReviewsCarousel id = "reviews-carousel"
                           options = {carouselOptions}
                           autoplay = {autoplayConfig}
                           showDots = {true}
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

    ${S_AppCarouselArrowButtonsContainer}{
        justify-content:right;
        top:0;
        gap:1rem;
    }

    ${S_AppCarouselDotsContainer}{
        bottom:-5%;
        display:flex;
        justify-content:center;
        align-items:center;
    }


`