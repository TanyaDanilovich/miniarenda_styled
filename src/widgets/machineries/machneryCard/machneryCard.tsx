import styled, {useTheme} from 'styled-components';
import {ImageContainer} from '../../../shared/styled/ImageContainer';
import {Button} from '../../../shared/ui/button/Button';
import React from 'react';
import {StyledBox} from '../../../shared/styled/Box';
import {fullAbsoluteElement, outline, plainTransition} from '../../../app/styles/mixins';
import {HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTable} from '@fortawesome/free-solid-svg-icons/faTable';


type Characteristic = { id: string, title: string, value: string }

export type machineryCardData = {
    title: string,
    image: { src: string, alt: string },
    characteristics: Characteristic[],
}

type props = machineryCardData & {};
export const MachineryCard = ({title, image, characteristics}: props) => {
    const theme = useTheme()
    return (
        <StyledMachineryCard>
            <MachineryImageCover>
                <ImageContainer>
                    <img src = {image.src} alt = {image.alt}/>
                    <HoverIcons secondLink = {""} firstLink = {""}/>
                </ImageContainer>
                <FontAwesomeIconCover>
                    <FontAwesomeIcon icon = {faTable} size = {'1x'} color = {theme.colors.white}/>
                </FontAwesomeIconCover>
            </MachineryImageCover>

            <MachineryCardTitle>
                <a href = {''}>{title}</a>
            </MachineryCardTitle>
            <MachineryCardTable>

                <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Характеристика</th>
                </tr>
                </thead>

                <tbody>
                {characteristics.map((characteristic, index) => (
                    <tr>
                        <td>{characteristic.title}</td>
                        <td>{characteristic.value}</td>
                    </tr>))}


                </tbody>

            </MachineryCardTable>
            <StyledBox $marginTop = {"1rem"}>
                <Button type = {'read more'}/>
            </StyledBox>
        </StyledMachineryCard>
    );
};

export const StyledMachineryCard = styled.article <{}>`


  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  position: relative;
  z-index: 10;

  a {
    text-transform: uppercase;
  }

  & div:first-child:before {
    ${fullAbsoluteElement()}
    ${plainTransition()};
      //${outline(10)};
    z-index: 2;
  }

  & div:first-child:hover:before {
    opacity: 1;
  }

  & div:first-child {
    img {
      transform: scale(1);
      ${plainTransition()};
    }
  }

  & div:first-child:hover {
    img {
      transform: scale(1.2);
      ${plainTransition()};
    }
  }

`;

export const MachineryCardTitle = styled.h4 <{}>`
  position: relative;
  z-index: 10;
  text-align: center`;

export const MachineryCardTable = styled.table<{}>`
  position: relative;
  z-index: 10;
  margin: auto;
`;

export const MachineryImageCover = styled.div<{}>`
    //${outline(10)};
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
}`;


export const FontAwesomeIconCover = styled.span<{}>`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 50%;
  text-align: center;
  line-height: 3rem;
  position: absolute;
  right: 3rem;
  bottom: 0;
  z-index: 5;
`