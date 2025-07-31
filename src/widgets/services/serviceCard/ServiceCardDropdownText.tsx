import React from 'react';
import {SchemaOrgData} from '../../../shared/types/common.types.ts';
import {S_DropdownText} from '../../../shared/styled/S_DropdownText.ts';
import styled, {useTheme} from 'styled-components';
import FontAwesomeIcon from '../../../shared/ui/icon/FontAwesomeIcon.tsx';

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


    return (
        <S_ServiceCardDropdownText $maxHeight = {maxHeight} $height = {height}>

            {descriptionUser.map((characteristic, index) =>


                <li key = {`${id}-${index}`}>
                    <FontAwesomeIcon icon = {'icon-check-circle'} size = {'1x'} color = {theme.colors.primary}/>
                    {characteristic}
                </li>
            )}

            <p {...textSchemaOrg}>
                {descriptionGoogle}
            </p>
        </S_ServiceCardDropdownText>);
};


export const S_ServiceCardDropdownText = styled(S_DropdownText)<{}>`
  p {
    padding: 0 1rem 0 1rem;
  }
`

