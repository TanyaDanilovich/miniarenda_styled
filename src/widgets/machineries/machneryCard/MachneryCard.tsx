import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import React, {useId} from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, outline, plainTransition, transitionHoverIcon} from '../../../app/styles/mixins';
import {HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTable} from '@fortawesome/free-solid-svg-icons/faTable';
import {FontAwesomeIconCover} from '../../../shared/styled/FontAwesomeIconCover';
import {S_Image} from '../../../shared/styled/S_Image';
import {getResponsiveSize} from '../../../shared/utils/getResponsiveSize';
import {BASE} from '../../../shared/constants/constants';
import {ReadMoreButton} from '../../../shared/ui/linkAsButton/ReadMoreButton';
import {ImageProps} from '../../../shared/types/common.types';


type Characteristic = { id: string, title: string, value: string }

export type machineryCardData = {
    title: string,
    image: ImageProps,
    characteristics: Characteristic[],
}

type props = machineryCardData & {};
export const MachineryCard = ({title, image, characteristics}: props) => {
    const theme = useTheme()
    const id = useId()
    return (
        <S_MachineryCard>
            <S_ImageContainer>

                <S_Image src = {image.src} alt = {image.alt}/>
                {/*<HoverIcons link={""} image={image}/>*/}

                <FontAwesomeIconCover>
                    <FontAwesomeIcon icon = {faTable} size = {'1x'} color = {theme.colors.white}/>
                </FontAwesomeIconCover>
            </S_ImageContainer>


            <S_MachineryCardTable>
                <S_MachineryCardTitle>
                    {title}
                </S_MachineryCardTitle>

                <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Характеристика</th>
                </tr>
                </thead>

                <tbody>
                {characteristics.map((characteristic, index) => (
                    <tr key = {`${id}-${index}`}>
                        <td>{characteristic.title}</td>
                        <td>{characteristic.value}</td>
                    </tr>))}
                </tbody>
            </S_MachineryCardTable>

            <S_Box $marginTop = {"1rem"} $marginLeft = {"1rem"}>
                <ReadMoreButton/>
            </S_Box>

        </S_MachineryCard>
    );
};

export const S_MachineryCard = styled.article <{}>`
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  position: relative;
  z-index: 10;
  padding-bottom: 1rem;
  max-width: 544px;
  margin: 0 auto;

  // ${ImageHover}
  ${S_ImageContainer} {
    position: relative;
    z-index: 5;

    &:after {
      position: absolute;
      content: "";
      height: 6rem;
      bottom: -4rem;
      border-top: 10px solid ${({theme}) => theme.colors.primary};
      width: 100%;
      transform: skew(0deg, 5deg);
      background-color: ${({theme}) => theme.colors.white};
      z-index: 3;
    }
  }


  // ${transitionHoverIcon}
`;



export const S_MachineryCardTitle = styled.caption <{}>`
  position: relative;
  z-index: 10;
  text-align: center;
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  font-size: ${({theme}) => theme.fonts.size.h3};
  margin: 2rem;
`;

export const S_MachineryCardTable = styled.table<{}>`
  position: relative;
  z-index: 10;
  margin: auto;
  overflow-x: auto;
  //width: 100%;
  border-collapse: collapse;

  th, td {
    border-bottom: 1px solid #ddd;
    padding-block: ${getResponsiveSize(BASE / 3, BASE / 2, 320)};
    padding-inline: ${getResponsiveSize(BASE * 0.75, BASE * 2, 320)};
  }

  tr {
    ${plainTransition()}
  }

  tr:hover {
    background-color: ${({theme}) => theme.colors.white_smoke};
  }
`;




