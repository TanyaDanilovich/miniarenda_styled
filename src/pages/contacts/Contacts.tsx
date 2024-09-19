import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';
import {S_Container} from '../../shared/styled/S_Container';


type props = {};

export const Contacts = ({}: props) => {

    return (
        <S_Contacts>
            <S_Container>
                Contacts
            </S_Container>
        </S_Contacts>);
};


export const S_Contacts = styled.div<{}>`
  ${sectionMargin};

`



