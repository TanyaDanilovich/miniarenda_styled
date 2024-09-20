import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';


type props = {};

export const TreeStumpRemoval = ({}: props) => {

    return (
        <S_TreeStumpRemoval>
            <S_Container>
                treeStumpRemoval
            </S_Container>
        </S_TreeStumpRemoval>);
};


export const S_TreeStumpRemoval = styled.div<{}>`
  ${sectionMargin};

`



