import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const UslugiAll = ({}: props) => {

    return (
        <S_UslugiAll>
            <S_Container>
                Uslugi All
            </S_Container>
        </S_UslugiAll>);
};


export const S_UslugiAll = styled.div<{}>`
  ${sectionMargin};

`



