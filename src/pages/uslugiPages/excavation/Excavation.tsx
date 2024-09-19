import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const Excavation = ({}: props) => {

    return (
        <S_Excavation>
            <S_Container>
                Копание
            </S_Container>
        </S_Excavation>);
};


export const S_Excavation = styled.div<{}>`
  ${sectionMargin};

`



