import styled from "styled-components";
import {S_Container} from '../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';


type props = {};

export const ArendaExavatora = ({}: props) => {

    return (
        <S_ArendaExavatora>
            <S_Container>
                Arenda Exavatora
            </S_Container>
        </S_ArendaExavatora>);
};


export const S_ArendaExavatora = styled.div<{}>`
  ${sectionMargin};

`



