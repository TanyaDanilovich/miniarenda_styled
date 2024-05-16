import React from 'react';

import {S_ReviewSwiper} from './S_ReviewSwiper';
import {SwiperSlide} from '../../../shared/ui/Swiper/SwiperSlide';
import {reviewsData} from '../reviewData';
import {ReviewCard} from '../reviewCard/ReviewCard';
import {v4 as uuidv4} from 'uuid';
import {useTheme} from 'styled-components';
import {SwiperProps} from 'swiper/swiper-react';


type props = {
    id: string,
};
export const ReviewSwiper = ({id}: props) => {
    const theme = useTheme()

    const swiperCss = `
 
    
    .swiper-pagination{
        position:relative;
        padding-block:2rem;
        // background-color:${theme.colors.lightGray};
        width: 100%;
        }
        
    .swiper-pagination-bullet{
        width: 8px;
        height:3px;
        display: inline-block;
        border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
        }
        
   .swiper-horizontal>.swiper-pagination-bullets, 
   .swiper-pagination-bullets.swiper-pagination-horizontal, 
   .swiper-pagination-custom, .swiper-pagination-fraction{
        width: auto;
        }
        
    .swiper-button-next,
    .swiper-button-prev{
    //position:relative;
        top: 2rem;
        background-color:${theme.colors.primary};
        height:30px;
        width:50px;
        transform:skewX(9deg);
        box-shadow: 3px 3px 0 0 ${theme.colors.dark};
    & svg {
       height:1rem; 
       color:white;
    }
    } 
    .swiper-button-prev{
         left:60dvw;
         }
`


    const params: SwiperProps = {
        slidesPerView: 1,
        pagination: {
            clickable: true,
            //dynamicBullets: true,
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


