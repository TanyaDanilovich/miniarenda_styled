import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const AllRentals = ({}: props) => {

    return (
        <S_AllRentals>
            <S_Container>
                Вся аренда
            </S_Container>
        </S_AllRentals>);
};


export const S_AllRentals = styled.div<{}>`
  ${sectionMargin};

`



