import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';


type props = {};

export const YamoburRental = ({}: props) => {
    const subcategoriesCardsData = API.getMachinesSubcategoriesData()
    return (
        <S_YamoburRental>
            <S_Container>
                <MappedSubcategoriesCards data = {subcategoriesCardsData}/>
            </S_Container>
            <S_Container>
                Arenda Yamobura
            </S_Container>
        </S_YamoburRental>);
};


export const S_YamoburRental = styled.div<{}>`
  ${sectionMargin};

`



