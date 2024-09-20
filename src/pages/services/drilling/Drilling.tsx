import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const Drilling = ({}: props) => {

    return (
        <S_Drilling>
            <S_Container>
                Drilling
            </S_Container>
        </S_Drilling>);
};


export const S_Drilling = styled.div<{}>`
  ${sectionMargin};

`



