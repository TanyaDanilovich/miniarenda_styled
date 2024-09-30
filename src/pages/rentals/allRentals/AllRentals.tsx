import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {outline, sectionMargin} from '../../../app/styles/mixins';
import {API} from '../../../app/api/API';
import {SubcategoriesCard} from '../../../widgets/subcategoriesCard/SubcategoriesCard';

type props = {};

export const AllRentals = ({}: props) => {

    const rentalSubcategories = API.getRentalSubcategoriesData()
    return (
        <S_AllRentals>
            <S_Container>
                {rentalSubcategories.map((subcategory, index) => {
                    return <SubcategoriesCard key = {index} {...subcategory}/>
                })}
            </S_Container>
        </S_AllRentals>);
};


export const S_AllRentals = styled.div<{}>`
  ${sectionMargin};

  @media ${({theme}) => theme.media.tablet} {
    ${S_Container} {
        //${outline()}
      width: 100%;
      display: grid;
      grid-template-columns: calc(33.33% - 0.66rem) calc(33.33% - 0.66rem) calc(33.33% - 0.66rem);
      column-gap: 1.5rem;
    }

  }
`



