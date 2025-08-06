import React from 'react';
import {SchemaOrgData} from '../../../shared/types/common.types.ts';
import {S_DropdownText} from '../../../shared/styled/S_DropdownText.ts';
import styled, {useTheme} from 'styled-components';
import FontAwesomeIcon from '../../../shared/ui/icon/FontAwesomeIcon.tsx';
import {plainTransition} from '../../../app/styles/mixins.ts';

type Props = {
    descriptionUser: string[];
    descriptionGoogle?: string;
    isOpen: boolean,
    schemaOrg?: SchemaOrgData,
    textSchemaOrg?: SchemaOrgData
};
export const ServiceCardDropdownText = ({
                                            id,
                                            descriptionUser,
                                            descriptionGoogle,
                                            isOpen,
                                            schemaOrg,
                                            textSchemaOrg
                                        }: Props) => {
    const theme = useTheme()

    const maxHeight = isOpen ? "24rem" : "0";
    const height = isOpen ? "100%" : "0"
    const listPadding = isOpen ? "0.5rem 1rem 0.5rem 1rem" : "0 1rem 0 1rem"

    return (
        <S_ServiceCardDropdownText $maxHeight = {maxHeight} $height = {height}>
            <S_DropdownTextList $maxHeight = {maxHeight} $height = {height} $padding = {listPadding}>
                {descriptionUser.map((characteristic, index) =>
                    <li key = {`${id}-${index}`}>
                        <FontAwesomeIcon icon = {'icon-check-circle'} size = {'1x'} color = {theme.colors.primary}/>
                        <span>{characteristic}</span>
                    </li>
                )}
            </S_DropdownTextList>
            <p {...textSchemaOrg}>
                {descriptionGoogle}
            </p>
        </S_ServiceCardDropdownText>);
};


export const S_ServiceCardDropdownText = styled(S_DropdownText)<{}>`

  //padding: 0 1rem 0 1rem;

  ${plainTransition()}
  p {
    height: 1px;
    overflow: hidden;
  }
`

export const S_DropdownTextList = styled.ul<{
    $maxHeight: string,
    $height: string,
    $padding?: string
}>`

  padding: ${({$padding}) => $padding || "0 1rem 0 1rem"};


  ${plainTransition()}
  max-height: ${({$maxHeight}) => $maxHeight ||"0"};
  height: ${({$height}) => $height};

  li:not(:last-child) {
    padding-bottom: 0.5rem;
  }

  li >span {
    padding-left: 0.5rem;
  }
`