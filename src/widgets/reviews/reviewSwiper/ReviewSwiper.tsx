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

    const css = `
    .swiper-pagination{
        position:relative;
        padding:1rem 1.5rem;
        background-color:${theme.colors.lightGray};
        display:inline-block;
        text-align:center;
        border-radius:2rem;
        }
        
   .swiper-horizontal>.swiper-pagination-bullets, 
   .swiper-pagination-bullets.swiper-pagination-horizontal, 
   .swiper-pagination-custom, .swiper-pagination-fraction{
        width: auto;
        }
        
    .swiper-button-next,
    .swiper-button-prev{
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
    
`

    const params: SwiperProps = {
        slidesPerView: 1,
        pagination: {
            clickable: true,
            //dynamicBullets:true,
        },
        navigation: true,
        injectStyles: [css], loop:true
    }


    return (
        <S_ReviewSwiper name = {"reviewSwiper"}
                        id = {id}
                        {...params}
        >

            {reviewsData.map((review, index) => {
                    const slideId = uuidv4();
                    return (
                        <SwiperSlide id = {slideId}>
                            <ReviewCard key = {`${id}-${index}`} userName = {review.userName}
                                        reviewContent = {review.reviewContent}/>
                        </SwiperSlide>)
                }
            )}

        </S_ReviewSwiper>);
};


