import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';


type props = {};

export const Price = ({}: props) => {

    return (
        <S_Price>
            <S_OuterContainer>
                Price
            </S_OuterContainer>
        </S_Price>);
};


export const S_Price = styled.div<{}>`
  ${sectionMargin};

`



