import styled from "styled-components";
import {S_Container} from '../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';


type props = {};

export const Arenda = ({}: props) => {

    return (
        <S_Arenda>
            <S_Container>
                Аренда компонент
            </S_Container>
        </S_Arenda>);
};


export const S_Arenda = styled.div<{}>`
  ${sectionMargin};

`



