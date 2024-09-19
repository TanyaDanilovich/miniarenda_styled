import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const ExavatorRental = ({}: props) => {

    return (
        <S_ExavatorRental>
            <S_Container>
                Arenda Exavatora
            </S_Container>
        </S_ExavatorRental>);
};


export const S_ExavatorRental = styled.div<{}>`
  ${sectionMargin};

`



