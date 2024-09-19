import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';
import {S_Container} from '../../shared/styled/S_Container';


type props = {};

export const Price = ({}: props) => {

    return (
        <S_Price>
            <S_Container>
                Price
            </S_Container>
        </S_Price>);
};


export const S_Price = styled.div<{}>`
  ${sectionMargin};

`



