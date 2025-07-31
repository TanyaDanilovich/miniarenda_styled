import styled from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import React from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, outline, plainTransition, transitionHoverIcon} from '../../../app/styles/mixins';
import {Category, SubcategoryItemData} from '../../../shared/types/common.types';
import {getResponsiveSize} from '../../../shared/utils/getResponsiveSize';
import {BASE} from '../../../shared/constants/constants';
import {DropdownText} from '../../questions/DropdownText';
import ResponsiveImage from '../../responsiveImage/responsiveImage';
import {ReadMoreButtonAsButton} from '../../../shared/ui/buttons/ReadMoreButtonAsButton';
import {S_DropdownText} from '../../../shared/styled/S_DropdownText.ts';

export type ServiceCardData = {
    toggleDescriptionCallback: () => void,
    isOpen: boolean
}

type props = ServiceCardData & { data: SubcategoryItemData<Category> };
export const ServiceCard = ({
                                data, toggleDescriptionCallback, isOpen

                            }: props) => {

    const cardPadding = getResponsiveSize(BASE, BASE * 3)
    const cardPaddingBottom = isOpen ? "1rem" : "0"
    return (
        <StyledServiceCard $paddingInline = {cardPadding}>
            {/*<StyledServiceCard itemScope itemType = "http://schema.org/Product" itemProp="itemReviewed">*/}
            {data.image && (
                <S_ImageContainer>
                    <ResponsiveImage image = {data.image}/>
                </S_ImageContainer>
            )}

            <ServiceCardTitle itemProp = "name" $paddingInline = {cardPadding}>
                {data.title}
            </ServiceCardTitle>


            <S_Box $marginTop = {"1rem"} $paddingLeft = {cardPadding} $paddingRight = {cardPadding}
                   $paddingBottom = {cardPaddingBottom}>

                <ReadMoreButtonAsButton onClick = {toggleDescriptionCallback}
                                        title = {isOpen ? "Свернуть" : "Подробнее"}/>

            </S_Box>
            <DropdownText itemProp = "description"
                          text = {data.description}
                          isOpen = {isOpen}/>

        </StyledServiceCard>
    );
};

export const StyledServiceCard = styled.article <{ $paddingInline: string }>`
  padding-bottom: ${({$paddingInline}) => $paddingInline || '1rem'};
  //margin: 1rem;
  box-shadow: ${({theme}) => theme.shadow.full};
  display: flex;
  flex-direction: column;


  ${transitionHoverIcon}
  & > ${S_ImageContainer} {
    ${ImageHover};
    aspect-ratio: 4/3;
  }

  @media ${({theme}) => theme.mediaMinWidth.largeMobile} {
    width: calc(50% - 20px);
    margin: 1rem auto;
  }

  @media ${({theme}) => theme.mediaMinWidth.computer} {
    width: calc(30%);

  }

  ${S_DropdownText} {
    p {
      padding: 0 1rem 0 1rem;
    }
  }



`;

export const ServiceCardTitle = styled.h3 <{ $paddingInline: string }>`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-inline: ${({$paddingInline}) => $paddingInline || '1rem'};
  color: ${({theme}) => theme.colors.black};
  ${plainTransition()};

  @media ${({theme}) => theme.mediaMinWidth.largeMobile} {
    min-height: 2.4em;
  }
`;

