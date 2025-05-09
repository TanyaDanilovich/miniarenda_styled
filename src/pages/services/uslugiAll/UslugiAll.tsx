import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const UslugiAll = ({}: props) => {

    return (
        <S_UslugiAll>
            <S_OuterContainer>
                Uslugi All
            </S_OuterContainer>
        </S_UslugiAll>);
};


export const S_UslugiAll = styled.div<{}>`
  ${sectionMargin};

`



