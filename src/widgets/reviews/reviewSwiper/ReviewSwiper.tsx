import React from 'react';
import {SwiperSlide} from '../../../shared/ui/Swiper/SwiperSlide';
import {reviewsData} from '../reviewData';
import {ReviewCard} from '../reviewCard/ReviewCard';
import {v4 as uuidv4} from 'uuid';
import styled, {useTheme} from 'styled-components';
import {SwiperProps} from 'swiper/swiper-react';
import {Swiper} from '../../../shared/ui/Swiper/Swiper';


type props = {
    id: string,
};
export const ReviewSwiper = ({id}: props) => {
    const theme = useTheme()

    const swiperCss = `
        .swiper-pagination{
            position:relative;
            padding-block:2rem;
            width:100%;
        }
        
        .swiper-pagination-bullet{
            width:8px;
            height:3px;
            display:inline-block;
            border-radius:var(--swiper-pagination-bullet-border-radius, 50%);
        }
        
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom, .swiper-pagination-fraction{
            width:auto;
        }
        
        .swiper-button-next,
        .swiper-button-prev{
            top:2rem;
            background-color:${theme.colors.primary};
            height:30px;
            width:50px;
            transform:skewX(9deg);
            box-shadow:3px 3px 0 0 ${theme.colors.dark};
        
            & svg{
                height:1rem;
                color:white;
            }
        }
        
        .swiper-button-prev{
            left:calc(100% - 140px);
        }

`


    const params: SwiperProps = {
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
            // 1170: {
            //     slidesPerView: 4,
            //     spaceBetween: 0
            // }
        },
        pagination: {
            clickable: true
        },
        navigation: true,
        injectStyles: [swiperCss],
        //loop: true
    }


    return (
        <S_ReviewSwiper name = {"reviewSwiper"}
                        id = {id}
                        {...params}
        >

            {reviewsData.map((review, index) => {
                    const slideId = uuidv4();
                    return (
                        <SwiperSlide id = {slideId} key = {`${id}-${index}`}>
                            <ReviewCard userName = {review.userName}
                                        reviewContent = {review.reviewContent}/>
                        </SwiperSlide>)
                }
            )}

        </S_ReviewSwiper>);
};


export const S_ReviewSwiper = styled(Swiper)<{}>`
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
