import React from 'react';
import styled, {css} from 'styled-components';
import {plainTransition} from '../../app/styles/mixins';
import {SchemaOrgData} from '../../shared/types/common.types';

type Props = { text: string, isOpen: boolean, schemaOrg?: SchemaOrgData, textSchemaOrg?: SchemaOrgData };
export const DropdownText = ({text, isOpen, schemaOrg, textSchemaOrg}: Props) => {

    const maxHeight = isOpen ? "24rem" : "0";
    const height = isOpen ? "100%" : "0"


    return (
        <S_DropdownText $maxHeight = {maxHeight} $height = {height}>
            <p {...textSchemaOrg}>
                {text}
            </p>
        </S_DropdownText>);
};


export const S_DropdownText = styled.div<{ $maxHeight: string, $height: string }>`
  margin: 0;

  p {
    padding: 0 1rem 0 3.5rem;
    overflow: scroll;
    ${plainTransition()}
    max-height: ${({$maxHeight}) => $maxHeight};
    height: ${({$height}) => $height};


  }

`

