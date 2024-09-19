import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const Moving = ({}: props) => {

    return (
        <S_Moving>
            <S_Container>
                Moving
            </S_Container>
        </S_Moving>);
};


export const S_Moving = styled.div<{}>`
  ${sectionMargin};

`



