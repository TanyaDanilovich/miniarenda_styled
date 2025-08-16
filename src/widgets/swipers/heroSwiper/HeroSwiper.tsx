import styled from 'styled-components';
import {heroData} from '../../hero/heroData';
import {AppSwiperSlide} from '../../../shared/ui/Swiper/AppSwiperSlide';
import {HeroSlider} from './HeroSlider';
import {BREAKPOINTS} from '../../../shared/constants/BREAKPOINTS';
import type {SwiperOptions} from 'swiper/types';
import {AppSwiper} from '../../../shared/ui/Swiper/AppSwiper';


type props = {
    id: string,
};


export const HeroSwiper = ({id}: props) => {

    const params: SwiperOptions = {
        slidesPerView: 1,

        navigation: true,
        pagination: {
            clickable: true
        },
        speed: 2000,
        autoplay: {
            delay: 4000,
        },

       // loop: true,
    }


    return (
        <S_HeroSwiper name = {"heroSwiper"}
                      id = {id}
                      {...params}
        >

            {heroData.map(({mainText, additionalText, image}, index) => {
                    console.log(index);
                    const slideId = `heroSwiperSlide-${index}`
                    return (
                        <AppSwiperSlide id = {slideId} key = {`${id}-${index}`}>
                            <HeroSlider mainText = {mainText}
                                        additionalText = {additionalText}
                                        image = {image}
                                        index = {index}
                            />
                        </AppSwiperSlide>)
                }
            )}

        </S_HeroSwiper>);
};


export const S_HeroSwiper = styled(AppSwiper)<object>`
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
