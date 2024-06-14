import React from 'react';

import {v4 as uuidv4} from 'uuid';
import styled, {useTheme} from 'styled-components';
import {SwiperProps} from 'swiper/swiper-react';
import {heroData} from './heroData';
import {SwiperSlide} from '../../shared/ui/Swiper/SwiperSlide';
import {Swiper} from '../../shared/ui/Swiper/Swiper';
import {HeroSlider} from './HeroSlider';
import img1 from "../../assets/images/main-slider/1920px/_DSC2623-1920w.jpg"
import img2 from "../../assets/images/main-slider/1920px/_DSC4349-1920w.jpg"
import img3 from "../../assets/images/main-slider/1920px/_DSC4666-1920w.jpg"
import img4 from "../../assets/images/main-slider/1920px/_DSC4764-1920w.jpg"
import {BREAKPOINTS} from '../../shared/constants';


type props = {
    id: string,
};
export const HeroSwiper = ({id}: props) => {
    const theme = useTheme()

    const urls = [img1, img2, img3, img4]

    const swiperCss = `
        .swiper-pagination{
            width:100%;      
        }
        
        .swiper-pagination-bullet{
            width:8px;
            height:8px;
            display:inline-block;
            border-radius:var(--swiper-pagination-bullet-border-radius, 50%);
        }
 
        .swiper-button-next,
        .swiper-button-prev{
            width:0;
            background-color:${theme.colors.primary};
            height:30px;
           
            transform:skewX(9deg);
            box-shadow:3px 3px 0 0 ${theme.colors.dark};
            
        & svg{
                height:1rem;
                color:white;
            }
            
        @media screen and (min-width:${BREAKPOINTS.tablet}) {
            width:50px;
             }  
        }

`


    const params: SwiperProps = {
        slidesPerView: 1,

        navigation: {
            enabled: true,
        },
        pagination: {
            clickable: true
        },

        injectStyles: [swiperCss],
        loop: true,
        //autoplay: {waitForTransition: true, delay: 3000, pauseOnMouseEnter: true},
    }


    return (
        <S_HeroSwiper name = {"heroSwiper"}
                      id = {id}
                      {...params}
        >

            {heroData.map(({mainText, additionalText, imgUrl}, index) => {
                    const slideId = uuidv4();
                    return (
                        <SwiperSlide id = {slideId} key = {`${id}-${index}`}>
                            <HeroSlider mainText = {mainText}
                                        additionalText = {additionalText}
                                        imgUrl = {urls[index]}
                            />
                        </SwiperSlide>)
                }
            )}

        </S_HeroSwiper>);
};


export const S_HeroSwiper = styled(Swiper)<{}>`
  --swiper-theme-color: ${({theme}) => theme.colors.primary};
  --swiper-pagination-bullet-size: 1rem;
  --swiper-pagination-bullet-width: 1rem;
  --swiper-pagination-bullet-height: 1rem;
  --swiper-pagination-bullet-inactive-opacity: 0.75;

  height: 100%;
`
