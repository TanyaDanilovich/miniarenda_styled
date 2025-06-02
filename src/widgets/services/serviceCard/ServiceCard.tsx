import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {S_Flex} from '../../../shared/styled/S_Flex';
import React from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, plainTransition, transitionHoverIcon} from '../../../app/styles/mixins';
import {HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';
import {S_Image} from '../../../shared/styled/S_Image';
import {ReadMoreButton} from '../../../shared/ui/buttons/ReadMoreButton';
import {Category, SubcategoryItemData} from '../../../shared/types/common.types';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {OrderedButton} from '../../../shared/ui/buttons/OrderedButton';
import {ContactUsButton} from '../../../shared/ui/buttons/ContactUsButton';
import {getResponsiveSize} from '../../../shared/utils/getResponsiveSize';
import {BASE} from '../../../shared/constants/constants';

export type ServiceCardData = {}

type props = ServiceCardData & { data: SubcategoryItemData<Category> };
export const ServiceCard = ({
                                data

                            }: props) => {
    const theme = useTheme()
    const {t} = useTranslation();
    const sBoxPadding = getResponsiveSize(BASE / 2, BASE)
    return (
        <StyledServiceCard>
            {data.image && (
                <S_ImageContainer>
                    <S_Image src = {data.image.src} alt = {data.image.alt}/>
                    {/*<HoverIcons link = {data.url} image = {data.image}/>*/}
                </S_ImageContainer>
            )}

            {/*<S_Flex $gap = {"1rem"} $style = {"margin-top: 1rem"}>*/}
            {/*    <FontAwesomeIcon icon = {faFolderOpen} size = {'1x'} color = {theme.colors.primary}/>*/}
            {/*    <Link to = {data.categoryUrl}>{t(`categories.${data.category}.title`)}</Link>*/}
            {/*    /!*<Link to={`/${data.categoryUrl}`}>{t(`categories.${data.category}.title`)}</Link>*!/*/}
            {/*</S_Flex>*/}


            <ServiceCardTitle>
                {/*<Link to = {`/${data.url}`}>{t(`${data.i18nKey}.title`)}</Link>*/}
                {t(`${data.i18nKey}.title`)}
            </ServiceCardTitle>

            {/*<ServiceCardText>*/}
            {/*    {t(`${data.i18nKey}.description`)}*/}
            {/*</ServiceCardText>*/}

            <S_Box $marginTop = {"1rem"} $paddingLeft = {sBoxPadding} $paddingRight = {sBoxPadding}>
                {/*<ReadMoreButton url = {`/${data.url}`}/>*/}
                <ContactUsButton/>
            </S_Box>
        </StyledServiceCard>
    );
};

export const StyledServiceCard = styled.article <{}>`
  padding-bottom: ${getResponsiveSize(BASE / 2, BASE)};
  //margin: 1rem;
  box-shadow: ${({theme}) => theme.shadow.full};
  display: flex;
  flex-direction: column;


  ${transitionHoverIcon}
  & > ${S_ImageContainer} {
    ${ImageHover};
  }


  @media ${({theme}) => theme.mediaMinWidth.mobile} {
    width: calc(50% - 20px);
    margin: 1rem auto;
  }
  @media ${({theme}) => theme.mediaMinWidth.tablet} {
    width: calc(30%);

  }

`;

export const ServiceCardTitle = styled.h3 <{}>`
  margin-bottom: 0;
  flex-grow: 1;
  padding-inline: ${getResponsiveSize(8, 16)};
  color: ${({theme}) => theme.colors.black};
  ${plainTransition()};

  // &:hover {
    //   color: ${({theme}) => theme.colors.primary};
  // }


`;

export const ServiceCardText = styled.p<{}>`
  flex-grow: 1;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  position: relative;`;
