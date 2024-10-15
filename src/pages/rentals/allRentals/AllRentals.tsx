import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';
import {API} from '../../../app/api/API';
import {allRentalText} from './allRentalText';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';

type props = {};

export const AllRentals = ({}: props) => {
    const rentalSubcategories = API.getAllRentalSubcategoriesData()
    const text: typeof allRentalText = allRentalText;
    return (
        <S_AllRentals>

            <S_OuterContainer>
                <h1>Аренда мини-экскаватора с&nbsp;гидромолотом&nbsp;и&nbsp;ямобуром</h1>
                {/*<h2>Доставка по Минску и области</h2>*/}
            </S_OuterContainer>

            <S_OuterContainer>
                <MappedSubcategoriesCards data = {rentalSubcategories}/>
            </S_OuterContainer>
            <S_OuterContainer>
                <p>{text.p1}</p>
                <p>{text.p2}</p>
                <ul>
                    {text.list.map((text, index) => {
                        return <li key = {index}>{text}</li>
                    })}
                </ul>
                <p>{text.p3}</p>
            </S_OuterContainer>

        </S_AllRentals>);
};


export const S_AllRentals = styled.section<{}>`

  display: flex;
  flex-direction: column;

  ${S_OuterContainer}:has(h1) {

    order: 2;
  }

  ${S_OuterContainer}:has(ul) {
    order: 3;
  }

  ${sectionMargin};


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


  h1, h2 {
    font-size: ${({theme}) => theme.fonts.size.h1};
    text-align: center;
    color: ${({theme}) => theme.colors.dark};
    font-weight: normal;
    white-space: pre-line;
    margin-block: 2rem;
  }
`



