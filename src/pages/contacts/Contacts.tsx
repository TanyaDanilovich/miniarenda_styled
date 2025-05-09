import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';


type props = {};

export const Contacts = ({}: props) => {

    return (
        <S_Contacts>
            <S_OuterContainer>
                Contacts
            </S_OuterContainer>
        </S_Contacts>);
};


export const S_Contacts = styled.div<{}>`
  ${sectionMargin};

`



