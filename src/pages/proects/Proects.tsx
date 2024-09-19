import styled from "styled-components";
import React from 'react';
import {sectionMargin} from '../../app/styles/mixins';
import {S_Container} from '../../shared/styled/S_Container';


type props = {};

export const Projects = ({}: props) => {

    return (
        <S_Projects>
            <S_Container>
                Projects
            </S_Container>
        </S_Projects>);
};


export const S_Projects = styled.div<{}>`
  ${sectionMargin};

`



