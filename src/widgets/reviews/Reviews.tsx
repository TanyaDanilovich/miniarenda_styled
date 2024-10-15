import React from 'react';
import {S_SectionTitle, SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {GoogleLink} from './googleLink/GoogleLink';
import {v4 as uuidv4} from 'uuid';
import {ReviewSwiper} from './reviewSwiper/ReviewSwiper';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import styled from "styled-components";
import {sectionMargin} from '../../app/styles/mixins';
import bgImg from "../../assets/png/reviews-bg.png"



type props = {};
export const Reviews = ({}: props) => {

    const swiperId = uuidv4();


    return (
        <S_Reviews>
            <S_OuterContainer>
                <SectionTitle title={"Отзывы наших клиентов"}/>
                <GoogleLink/>
                <ReviewSwiper id = {swiperId}/>
            </S_OuterContainer>
        </S_Reviews>);
};




export const S_Reviews = styled.section<{}>`
  background-image: url(${bgImg});

  ${sectionMargin};
  padding-block: 2rem;


  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  //position: relative;
  background-repeat: no-repeat;
  background-color: ${({theme}) => theme.colors.white_smoke};
`


