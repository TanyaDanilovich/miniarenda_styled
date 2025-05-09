import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const Moving = ({}: props) => {

    return (
        <S_Moving>
            <S_OuterContainer>
                Moving
            </S_OuterContainer>
        </S_Moving>);
};


export const S_Moving = styled.div<{}>`
  ${sectionMargin};

`



