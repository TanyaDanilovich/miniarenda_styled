import styled from "styled-components";
import React from 'react';
import {outline, outlinedNestedEverything, sectionMargin} from '../../../app/styles/mixins';
import {
    MappedSubcategoriesCards,
    S_MappedSubcategoriesCards
} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';
import {ExcavatorRentalCard} from '../../../widgets/excavatorRentalCard/ExcavatorRentalCard';
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import {MachineryCharacteristicKeys} from '../../../shared/types/common.types';
import {S_InnerContainer} from '../../../shared/styled/S_InnerContainer';
import {getResponsiveSize} from '../../../shared/utils/getResponsiveSize';
import {BASE} from '../../../shared/constants/constants';
import {CardPrice} from '../../../widgets/cardPrice/cardPrice';


type props = {};

export const ExcavatorRental = ({}: props) => {
    const keys: MachineryCharacteristicKeys[] = ['weight', 'diggingDepth', 'drillingDepth', 'buckets', 'augers']
    const machineryData = API.getMachineriesData(keys);

    const subcategoriesCardsData = API.getMachinesSubcategoriesData()
    return (
        <S_ExcavatorRental>

            <MappedSubcategoriesCards data = {subcategoriesCardsData}/>
            <h1>Аренда мини-экскаватора в Минске и Минской области</h1>

            {/*<p>Умеем работать в стесненных условиях</p>*/}

            <CardPrice/>


            <S_InnerContainer>
                {machineryData.map((machine) => (<ExcavatorRentalCard key = {machine.id}
                                                                      id = {machine.id}
                                                                      tableTitle = {machine.tableTitle}
                                                                      characteristics = {machine.characteristics}
                                                                      priceCharacteristics = {machine.priceCharacteristics}
                                                                      image = {machine.image}
                    />)
                )}
            </S_InnerContainer>

        </S_ExcavatorRental>);
};


export const S_ExcavatorRental = styled(S_OuterContainer)<{}>`
  ${sectionMargin};
  //padding: 0;
  & p {
    margin-block: 2rem;
    text-align: center;
  }

  & h1 {
    text-wrap: none;
  }

    //${outlinedNestedEverything}
  ${S_MappedSubcategoriesCards} {
  }

  h1, h2 {
    font-size: ${({theme}) => theme.fonts.size.h1};
    text-align: center;
    color: ${({theme}) => theme.colors.dark};
    font-weight: normal;
    white-space: pre-line;
    margin-block: 2rem;
  }

  ${S_InnerContainer} + ${S_InnerContainer} {
    padding-inline: ${getResponsiveSize(0, BASE, 320, 425)};
  }
`


export const S_ExcavatorRentalContentWrapper = styled.div<{}>`
  @media ${({theme}) => theme.media.mobile} {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`
export const S_ExcavatorRentalCardWrapper = styled.div<{}>`

`