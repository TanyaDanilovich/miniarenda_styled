import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';


type props = {};

export const Projects = ({}: props) => {

    return (
        <S_Projects>
            <S_OuterContainer>
                Projects
            </S_OuterContainer>
        </S_Projects>);
};


export const S_Projects = styled.div<{}>`
  ${sectionMargin};

`



