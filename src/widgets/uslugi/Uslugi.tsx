import styled from "styled-components";
import {S_Container} from '../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';


type props = {};

export const Uslugi = ({}: props) => {

    return (
        <S_Uslugi>
            <S_Container>
                Uslugi all
            </S_Container>
        </S_Uslugi>);
};


export const S_Uslugi = styled.div<{}>`
  ${sectionMargin};

`



