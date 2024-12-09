import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import React from 'react';
import {S_Box} from '../../shared/styled/S_Box';
import {S_Image} from '../../shared/styled/S_Image';
import {ReadMoreButton} from '../../shared/ui/buttons/ReadMoreButton';
import img from '../../assets/images/portfolio/370/portfolio9-370w.jpg';
import {ImageProps} from '../../shared/types/common.types';
import {S_Flex} from '../../shared/styled/S_Flex';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type props = {
    id: string,
    image?: ImageProps,
    title: string,
    description: string,
    characteristicList: string[]
};
export const EquipmentCard = ({
                                  id,
                                  title,
                                  description,
                                  image,
                                  characteristicList,

                              }: props) => {
    const theme = useTheme()
    return (
        <S_EquipmentCard as = "article"
                         $direction = {"column"}

        >

            <S_ImageContainer>
                <S_Image src = {image?.src || img} alt = {image?.alt || `${title}`}/>
            </S_ImageContainer>


            <S_EquipmentCardTitle>
                {title}
            </S_EquipmentCardTitle>

            <S_EquipmentCardDescription>
                {description}
            </S_EquipmentCardDescription>

            <S_EquipmentCardCharacteristics>
                {characteristicList.map((characteristic, index) =>
                    <>

                        <li key = {`${id}-${index}`}>
                            <FontAwesomeIcon icon = {faCircleCheck} size = {'1x'} color = {theme.colors.primary}/>
                            {characteristic}
                        </li>
                    </>
                )}
            </S_EquipmentCardCharacteristics>

            <S_Box $marginTop = {"1rem"}>
                <ReadMoreButton url = {theme.hrefs.tel} title = {"Заказать"}/>
            </S_Box>

        </S_EquipmentCard>
    );
};


type S_EquipmentCardProps = {}
export const S_EquipmentCard = styled(S_Flex)<S_EquipmentCardProps>`

  padding: ${getResponsiveSize(BASE * 0.4, BASE, 320)};
  box-shadow: ${({theme}) => theme.shadow.full};
  display: flex;
  flex-direction: column;
  width: calc(50% - 0.3rem);
  background-color: ${({theme}) => theme.colors.white};

  h3 {
    margin: 0;
    padding: 0;
  }
`;

export const S_EquipmentCardTitle = styled.h3<{}>`
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
`;


export const S_EquipmentCardDescription = styled.p<{}>`
  color: ${({theme}) => theme.colors.black};
`;

export const S_EquipmentCardCharacteristics = styled.ul<{}>`
  flex-grow: 1;

  svg {
    position: absolute;
    left: -1.25rem;
    top: 0.2rem;
  }

  & li {
    position: relative;
    margin-left: 1.5rem;
    font-size: 0.8rem;
  }
`