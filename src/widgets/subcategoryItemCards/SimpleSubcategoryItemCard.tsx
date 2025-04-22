import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import React from 'react';
import {S_Box} from '../../shared/styled/S_Box';
import {ImageHover, outline, plainTransition, transitionHoverIcon} from '../../app/styles/mixins';
import {S_Image} from '../../shared/styled/S_Image';
import {ReadMoreButton} from '../../shared/ui/buttons/ReadMoreButton';
import {SubcategoryItemCard} from '../../shared/types/common.types';
import img from '../../assets/images/portfolio/370/portfolio9-370w.jpg';
import { useTranslation } from 'react-i18next';

type props = SubcategoryItemCard & {};
export const SimpleSubcategoryItemCard = ({
                                              id,
                                              i18nKey ,
                                              images,
                                              position,

                                          }: props) => {
    const theme = useTheme()
    const { t } = useTranslation();
    return (
        <S_SubcategoryItemCard>
            {/*{images.length && */}
            <S_ImageContainer>
                <S_Image
                    src={images[0]?.src || img}
                    alt={images[0]?.alt || `${t(`${i18nKey}.title`, { lng: 'ru' })} гидромолотом`}
                />
                {/*<HoverIcons link = {url} image = {image}/>*/}
            </S_ImageContainer>
            {/*}*/}

            {/*<S_Flex $gap = {"1rem"} $style = {"margin-top: 1rem"}>*/}
            {/*    <FontAwesomeIcon icon = {faFolderOpen} size = {'1x'} color = {theme.colors.primary}/>*/}
            {/*    <a href = {categoryUrl}>{categoryTitle}</a>*/}
            {/*</S_Flex>*/}


            <S_SubcategoryItemCardTitle>
                {t(`${i18nKey}.title`)}
            </S_SubcategoryItemCardTitle>

            <S_SubcategoryItemCardText>
                {t(`${i18nKey}.description`)}
            </S_SubcategoryItemCardText>

            <S_Box $marginTop = {"1rem"}>
                <ReadMoreButton url = {"#"} title = {"Узнать больше"}/>
            </S_Box>

        </S_SubcategoryItemCard>
    );
};

export const S_SubcategoryItemCard = styled.article <{}>`

  padding: 1rem;
  margin-top: 3rem;
  box-shadow: ${({theme}) => theme.shadow.full};
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.white};


  ${transitionHoverIcon}
  & > ${S_ImageContainer} {
    ${ImageHover};
  }


    // @media ${({theme}) => theme.mediaMinWidth.mobile} {
  //   width: calc(50% - 20px);
  //   margin: 1rem auto;
  // }
    // @media ${({theme}) => theme.mediaMinWidth.tablet} {
  //   width: calc(30%);
  //
  // }

`;

export const S_SubcategoryItemCardTitle = styled.h3 <{}>`
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
  min-height: 53px;
`;

export const S_SubcategoryItemCardText = styled.p<{}>`
  flex-grow: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  position: relative;`;
