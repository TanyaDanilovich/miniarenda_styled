import {useState} from 'react';
import styled from 'styled-components';
import {AppSwiper} from '../../../shared/ui/Swiper/AppSwiper';
import {reviewsData} from '../../reviews/reviewData';
import {ReviewSlide} from './ReviewSlide';
import type {SwiperOptions} from 'swiper/types';


type props = {
    id: string,
};
export const ReviewSwiper = ({id}: props) => {

    const [close, setClose] = useState<boolean | null>(null)

    const resetClose = () => setClose(null)

    const params: SwiperOptions = {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 0
            },

        },
        pagination: {
            clickable: true
        },
        navigation: true,
    }

    return (
        <S_ReviewSwiper name = {"reviewSwiper"}
                        id = {id}
                        listenerType = {'swiperslidechange'}
                        eventCallback = {() => setClose(true)}
                        {...params}
        >


            {reviewsData.map((review, index) =>
                <ReviewSlide userName = {review.userName}
                             reviewContent = {review.reviewContent}
                             close = {close}
                             resetClose = {resetClose}
                             key = {`${id}-${index}`}
                />)}

        </S_ReviewSwiper>);
};


export const S_ReviewSwiper = styled(AppSwiper)<{}>`
  --swiper-theme-color: ${({theme}) => theme.colors.primary};
  --swiper-pagination-bullet-size: 1rem;
  --swiper-pagination-bullet-width: 1rem;
  --swiper-pagination-bullet-height: 1rem;
  --swiper-pagination-bullet-inactive-opacity: 0.75;


  &::part(pagination) {
    position: relative;
    padding-block: 2rem;
    width: 100%;
  }

  &::part(bullet),
  &::part(bullet-active) {
    width: 8px;
    height: 3px;
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  }

  &::part(pagination) {
    width: auto;
  }

  &::part(button-prev),
  &::part(button-next) {
    top: 2rem;
    background-color: ${({theme}) => theme.colors.primary};
    height: 1rem;
    width: 50px;
    transform: skewX(9deg);
    box-shadow: 3px 3px 0 0 ${({theme}) => theme.colors.dark};
    padding-block: 0.5rem;
    color: white;
  }

  &::part(button-prev) {
    left: calc(100% - 140px);
  }







`
