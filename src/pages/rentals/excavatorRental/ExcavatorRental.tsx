import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';


type props = {};

export const ExcavatorRental = ({}: props) => {

    return (
        <S_ExavatorRental>
            <MappedSubcategoriesCards/>

        </S_ExavatorRental>);
};


export const S_ExavatorRental = styled.div<{}>`
  ${sectionMargin};

`



