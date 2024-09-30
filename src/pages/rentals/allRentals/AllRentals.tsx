import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {outline, sectionMargin} from '../../../app/styles/mixins';
import {API} from '../../../app/api/API';
import {SubcategoriesCard} from '../../../widgets/subcategoriesCard/SubcategoriesCard';
import {allRentalText} from './allRentalText';
import {Services} from '../../../widgets/services/Services';
import {ServiceCard} from '../../../widgets/services/serviceCard/ServiceCard';

type props = {};

export const AllRentals = ({}: props) => {

    const rentalSubcategories = API.getRentalSubcategoriesData()
    const text: typeof allRentalText = allRentalText;
    return (
        <S_AllRentals>
            <S_Container>
                {rentalSubcategories.map((subcategory, index) => (
                    <SubcategoriesCard key = {index} {...subcategory}/>
                ))}
            </S_Container>

            {/*<S_Container>*/}
            {/*    {rentalSubcategories.map((card) =>*/}
            {/*        <ServiceCard key = {card.id}*/}
            {/*                     id = {card.id}*/}
            {/*                     category = {card.category}*/}
            {/*                     categoryTitle = {card.categoryTitle}*/}
            {/*                     categoryUrl = {card.categoryUrl}*/}
            {/*                     subcategory = {card.subcategory}*/}
            {/*                     subcategoryTitle = {card.subcategoryTitle}*/}
            {/*                     subcategoryDescription = {card.subcategoryDescription}*/}
            {/*                     subcategoryUrl = {card.subcategoryUrl}*/}
            {/*                     image = {card.image}*/}
            {/*                     url = {card.url}*/}
            {/*                     position = {card.position}*/}
            {/*        />)}*/}
            {/*</S_Container>*/}
            
            <S_Container>
                <p>{text.p1}</p>
                <p>{text.p2}</p>
                <ul>
                    {text.list.map((text, index) => {
                        return <li key = {index}>{text}</li>
                    })}
                </ul>
                <p>{text.p3}</p>
            </S_Container>

        </S_AllRentals>);
};


export const S_AllRentals = styled.div<{}>`
  ${sectionMargin};

  @media ${({theme}) => theme.media.tablet} {
    ${S_Container}:first-child {
        //${outline()}
      width: 100%;
      display: grid;
      grid-template-columns: calc(33.33% - 0.66rem) calc(33.33% - 0.66rem) calc(33.33% - 0.66rem);
      column-gap: 1.5rem;
    }
  }

  p:first-child {
    margin-bottom: 1rem;
  }

  & ul {

    padding: 1rem;
    margin: 0;
  }

  & ul li {
    list-style: disc;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`



