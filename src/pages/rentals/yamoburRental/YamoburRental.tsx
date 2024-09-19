import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const YamoburRental = ({}: props) => {

    return (
        <S_YamoburRental>
            <S_Container>
                Arenda Yamobura
            </S_Container>
        </S_YamoburRental>);
};


export const S_YamoburRental = styled.div<{}>`
  ${sectionMargin};

`



