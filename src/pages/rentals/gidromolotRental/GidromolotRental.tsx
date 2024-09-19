import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const GidromolotRental = ({}: props) => {

    return (
        <S_GidromolotRental>
            <S_Container>
                Arenda Gidromolota
            </S_Container>
        </S_GidromolotRental>);
};


export const S_GidromolotRental = styled.div<{}>`
  ${sectionMargin};

`



