import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';
import {API} from '../../app/api/API';
import {RENTAL_SUBCATEGORY} from '../../shared/constants/RENTAL_SUBCATEGORY';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {S_InnerContainer} from '../../shared/styled/S_InnerContainer';
import {SubcategoryItemCardsSwiper} from './SubcategoryItemCardsSwiper';


type props = {};

export const SubcategoryItemCards = ({}: props) => {

    const serviceTitle = `Что может гидромолот`

    const cards = API.getSubcategoryItemCards(RENTAL_SUBCATEGORY.HAMMER);

    return (
        <S_SubcategoryItemCards>
            <S_InnerContainer>
                <SectionTitle title = {serviceTitle}/>

                {cards && <SubcategoryItemCardsSwiper cards = {cards}/>}

            </S_InnerContainer>
        </S_SubcategoryItemCards>);
};


export const S_SubcategoryItemCards = styled.section<{}>`
  ${sectionMargin};

`



