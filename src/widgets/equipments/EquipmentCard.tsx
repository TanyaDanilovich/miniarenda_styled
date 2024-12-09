import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import React from 'react';
import {S_Box} from '../../shared/styled/S_Box';
import {S_Image} from '../../shared/styled/S_Image';
import {ReadMoreButton} from '../../shared/ui/buttons/ReadMoreButton';
import img from '../../assets/images/portfolio/370/portfolio9-370w.jpg';
import {ImageProps, PropsWithChildren} from '../../shared/types/common.types';

type props = { image?: ImageProps, title: string, description: string };
export const EquipmentCard = ({
                                  // id,
                                  title,
                                  description,
                                  image,
                                  children
                                  // position,

                              }: PropsWithChildren<props>) => {
    const theme = useTheme()
    return (
        <S_EquipmentCard>
            {/*{images.length && */}
            <S_ImageContainer>
                <S_Image src = {image?.src || img} alt = {image?.alt || `${title}`}/>
            </S_ImageContainer>
            {/*}*/}


            <S_EquipmentCardTitle>
                {title}
            </S_EquipmentCardTitle>

            <S_EquipmentCardDescription>
                {description}
            </S_EquipmentCardDescription>

            {children}


            <S_Box $marginTop = {"1rem"}>
                <ReadMoreButton url = {theme.hrefs.tel} title = {"Заказать"}/>
            </S_Box>

        </S_EquipmentCard>
    );
};

export const S_EquipmentCard = styled.article <{}>`

  padding: 1rem;
  box-shadow: ${({theme}) => theme.shadow.full};
  display: flex;
  flex-direction: column;
  width: calc(50% - 0.5rem);
  background-color: ${({theme}) => theme.colors.white};
`;

export const S_EquipmentCardTitle = styled.h3 <{}>`
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
  //min-height: 53px;
`;


export const S_EquipmentCardDescription = styled.p <{}>`
  color: ${({theme}) => theme.colors.black};

`;