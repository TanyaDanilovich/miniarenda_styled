import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const TreeStumpRemoval = ({}: props) => {

    return (
        <S_TreeStumpRemoval>
            <S_OuterContainer>
                treeStumpRemoval
            </S_OuterContainer>
        </S_TreeStumpRemoval>);
};


export const S_TreeStumpRemoval = styled.div<{}>`
  ${sectionMargin};

`



