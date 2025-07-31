import React from 'react';
import {SchemaOrgData} from '../../../shared/types/common.types.ts';
import {S_DropdownText} from '../../../shared/styled/S_DropdownText.ts';
import styled from 'styled-components';

type Props = { text: string, isOpen: boolean, schemaOrg?: SchemaOrgData, textSchemaOrg?: SchemaOrgData };
export const ServiceCardDropdownText = ({text, isOpen, schemaOrg, textSchemaOrg}: Props) => {

    const maxHeight = isOpen ? "24rem" : "0";
    const height = isOpen ? "100%" : "0"


    return (
        <S_ServiceCardDropdownText $maxHeight = {maxHeight} $height = {height}>
            <p {...textSchemaOrg}>
                {text}
            </p>
        </S_ServiceCardDropdownText>);
};


export const S_ServiceCardDropdownText = styled(S_DropdownText)<{}>`
  p {
    padding: 0 1rem 0 1rem;
  }
`

