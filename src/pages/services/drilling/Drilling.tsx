import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const Drilling = ({}: props) => {

    return (
        <S_Drilling>
            <S_OuterContainer>
                Drilling
            </S_OuterContainer>
        </S_Drilling>);
};


export const S_Drilling = styled.div<{}>`
  ${sectionMargin};

`



