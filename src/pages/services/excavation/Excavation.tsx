import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const Excavation = ({}: props) => {

    return (
        <S_Excavation>
            <S_OuterContainer>
                Копание
            </S_OuterContainer>
        </S_Excavation>);
};


export const S_Excavation = styled.div<{}>`
  ${sectionMargin};

`



