import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {outline, sectionMargin} from '../../../app/styles/mixins';
import {API} from '../../../app/api/API';
import {SubcategoriesCard} from '../../../widgets/subcategoriesCard/SubcategoriesCard';
import {allRentalText} from './allRentalText';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';

type props = {};

export const AllRentals = ({}: props) => {

    const text: typeof allRentalText = allRentalText;
    return (
        <S_AllRentals>

            <S_Container>
                <h1>Аренда мини-экскаватора с&nbsp;гидромолотом&nbsp;и&nbsp;ямобуром</h1>
                {/*<h2>Доставка по Минску и области</h2>*/}
            </S_Container>


            <MappedSubcategoriesCards/>

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


export const S_AllRentals = styled.section<{}>`

  display: flex;
  flex-direction: column;

  ${S_Container}:has(h1) {
    order: 2;
  }

  ${S_Container}:has(ul) {
    order: 3;
  }


  @media ${({theme}) => theme.media.tablet} {
    ${sectionMargin};
    ${S_Container}:not(:has(h1,p)) {
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


  h1, h2 {
    font-size: ${({theme}) => theme.fonts.size.h1};
    text-align: center;
    color: ${({theme}) => theme.colors.dark};
    font-weight: normal;
    white-space: pre-line;
    margin-block: 2rem;
  }
`



