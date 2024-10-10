import styled from "styled-components";
import React from 'react';
import {outline, outlinedNestedEverything, sectionMargin} from '../../../app/styles/mixins';
import {
    MappedSubcategoriesCards,
    S_MappedSubcategoriesCards
} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';
import {ExcavatorRentalCard} from '../../../widgets/excavatorRentalCard/ExcavatorRentalCard';
import {S_Container} from '../../../shared/styled/S_Container';
import {MachineryCharacteristicKeys} from '../../../shared/types/common.types';


type props = {};

export const ExcavatorRental = ({}: props) => {
    const keys: MachineryCharacteristicKeys[] = ['weight', 'diggingDepth','drillingDepth','buckets','augers']
    const machineryData = API.getMachineriesData(keys);
    const subcategoriesCardsData = API.getMachinesSubcategoriesData()
    return (
        <S_ExcavatorRental>
            <h1>Аренда мини-экскаватора в Минске и Минской области</h1>

            <MappedSubcategoriesCards data = {subcategoriesCardsData}/>

            {machineryData.map((machine) => (<ExcavatorRentalCard key = {machine.id}
                                                                  id = {machine.id}
                                                                  tableTitle = {machine.tableTitle}
                                                                  characteristics = {machine.characteristics}
                />)
            )}


        </S_ExcavatorRental>);
};


export const S_ExcavatorRental = styled(S_Container)<{}>`
  ${sectionMargin};
  //padding: 0;

  & h1 {
    text-wrap: none;
  }

    //${outlinedNestedEverything}
  ${S_MappedSubcategoriesCards} {

      //${outline()}

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


export const S_ExcavatorRentalContentWrapper = styled.div<{}>`
  @media ${({theme}) => theme.media.mobile} {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`
export const S_ExcavatorRentalCardWrapper = styled.div<{}>`
  @media ${({theme}) => theme.media.mobile} {

  }
`