import React from 'react';

import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import {heroData} from './heroData';
import {AppSwiperSlide} from '../../shared/ui/Swiper/AppSwiperSlide';
import {AppSwiper} from '../../shared/ui/Swiper/AppSwiper';
import {SwiperOptions} from 'swiper/types';
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

    const urls = [img1, img2, img3, img4]


    const params: SwiperOptions = {
        slidesPerView: 1,

        navigation: true,
        pagination: {
            clickable: true
        },

        //injectStyles: [swiperCss],

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
                        <AppSwiperSlide id = {slideId} key = {`${id}-${index}`}>
                            <HeroSlider mainText = {mainText}
                                        additionalText = {additionalText}
                                        imgUrl = {urls[index]}
                            />
                        </AppSwiperSlide>)
                }
            )}

        </S_HeroSwiper>);
};


export const S_HeroSwiper = styled(AppSwiper)<{}>`
  --swiper-theme-color: ${({theme}) => theme.colors.primary};
  --swiper-pagination-bottom: 1px;
  --swiper-pagination-bullet-size: 2rem;
  --swiper-pagination-bullet-width: 1rem;
  --swiper-pagination-bullet-height: 1rem;
  --swiper-pagination-bullet-inactive-opacity: 0.75;


  height: 100%;
  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    --swiper-pagination-bottom: 8px;
  }

  &::part(button-prev),
  &::part(button-next) {
    width: 0;
    background-color: ${({theme}) => theme.colors.primary};
    height: 1rem;
    color: white;
    transform: skewX(9deg);
    box-shadow: 3px 3px 0 0 ${({theme}) => theme.colors.dark};
    padding-block: 0.5rem;

    @media screen and (min-width: ${BREAKPOINTS.tablet}) {
      width: 50px;
    }
  }


  &::part(pagination) {
    width: 100%;
  }

  &::part(bullet) {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  }

  &::part(bullet-active) {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  }

`
