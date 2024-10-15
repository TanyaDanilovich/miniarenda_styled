import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';


type props = {};

export const GidromolotRental = ({}: props) => {
    const subcategoriesCardsData = API.getMachinesSubcategoriesData()
    return (
        <S_GidromolotRental>
            <S_OuterContainer>
                <MappedSubcategoriesCards data = {subcategoriesCardsData}/>
            </S_OuterContainer>
            <S_OuterContainer>
                Arenda Gidromolota
            </S_OuterContainer>
        </S_GidromolotRental>);
};


export const S_GidromolotRental = styled.div<{}>`
  ${sectionMargin};

`



