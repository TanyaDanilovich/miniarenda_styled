import styled from "styled-components";
import React, {useId} from 'react';
import {SimpleSubcategoryItemCard} from './SimpleSubcategoryItemCard';
import {S_Flex} from '../../shared/styled/S_Flex';
import {S_InnerContainer} from '../../shared/styled/S_InnerContainer';
import {SwiperProps} from 'swiper/swiper-react';
import {AppSwiper} from '../../shared/ui/Swiper/AppSwiper';
import {SubcategoryItemCard} from '../../shared/types/common.types';
import {AppSwiperSlide} from '../../shared/ui/Swiper/AppSwiperSlide';
import {SwiperOptions} from 'swiper/types/swiper-options';
import {BASE} from '../../shared/constants/constants';


type props = { cards: SubcategoryItemCard[] };

export const SubcategoryItemCardsSwiper = ({cards}: props) => {
    const id = useId();

    const params: SwiperProps & SwiperOptions = {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: BASE * 4
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },

        },
        grid: {rows: 2, fill: 'row'},
        pagination: {
            clickable: true
        },
        navigation: true,

        // injectStyles: [swiperCss],
        //loop: true
    }

    return (
        <S_SubcategoryItemCardsSwiper
            name = {"subcategoryItemCardsSwiper"}
            id = {id}
            listenerType = {'swiperslidechange'}
            eventCallback = {() => {
            }}
            {...params}
        >


            {cards && cards.map((card) =>
                <AppSwiperSlide id = {card.id}>
                    <SimpleSubcategoryItemCard key = {card.id}
                                               id = {card.id}
                                               title = {card.title}
                                               description = {card.description}
                                               images = {card.images}
                                               position = {card.position}
                    />
                </AppSwiperSlide>)}


        </S_SubcategoryItemCardsSwiper>);
};


export const S_SubcategoryItemCardsSwiper = styled(AppSwiper)<{}>`
  --swiper-theme-color: ${({theme}) => theme.colors.primary};
  --swiper-pagination-bullet-size: 1rem;
  --swiper-pagination-bullet-width: 1rem;
  --swiper-pagination-bullet-height: 1rem;
  --swiper-pagination-bullet-inactive-opacity: 0.5;
  --swiper-pagination-bullet-horizontal-gap: 0.5rem;

  &::part(pagination) {
    position: relative;
    padding-block: 1rem;
    width: 100%;
    top: 0;
  }

  &::part(pagination) {
    width: auto;
  }

  &::part(button-prev),
  &::part(button-next) {
    background-color: ${({theme}) => theme.colors.primary};
    height: 1rem;
    width: 50px;
    transform: skewX(9deg);
    box-shadow: 3px 3px 0 0 ${({theme}) => theme.colors.dark};
    padding-block: 0.5rem;
    color: white;
    top: calc(50% - 3.5rem);
    margin: 0;
  }


`



