import React from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {GoogleLink} from './googleLink/GoogleLink';
import {ReviewSwiper} from '../swipers/reviewSwiper/ReviewSwiper';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import styled, {useTheme} from "styled-components";
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import bgImg from "../../assets/png/reviews-bg.png"
import {S_BackgroundWrapper} from '../../shared/styled/S_BackgroundWrapper';


type props = { offset: number };
export const Reviews = ({offset}: props) => {
    const theme = useTheme();
    const swiperId = "reviewsSwiper";


    return (
        <S_Reviews id={"reviews"} >
            <S_BackgroundWrapper $offset = {offset} $backgroundColor = {theme.colors.white_smoke}>
                <S_OuterContainer>
                    <SectionTitle title = {"Отзывы наших клиентов"}/>



                    <GoogleLink/>

                    <ReviewSwiper id = {swiperId}/>
                </S_OuterContainer>
            </S_BackgroundWrapper>
        </S_Reviews>);
};


export const S_Reviews = styled.section<{}>`
  background-image: url(${bgImg});

  ${sectionMargin};
  ${sectionPadding};


  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  //position: relative;
  background-repeat: no-repeat;
  background-color: ${({theme}) => theme.colors.white_smoke};
  & h2{
    margin-top: 2rem;
  }
`


