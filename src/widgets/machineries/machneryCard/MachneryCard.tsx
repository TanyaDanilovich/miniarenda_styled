import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import {Button} from '../../../shared/ui/button/Button';
import React, {useId} from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, outline, plainTransition} from '../../../app/styles/mixins';
import {HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTable} from '@fortawesome/free-solid-svg-icons/faTable';
import {FontAwesomeIconCover} from '../../../shared/styled/FontAwesomeIconCover';
import {S_Image} from '../../../shared/styled/S_Image';


type Characteristic = { id: string, title: string, value: string }

export type machineryCardData = {
    title: string,
    image: { src: string, alt: string },
    characteristics: Characteristic[],
}

type props = machineryCardData & {};
export const MachineryCard = ({title, image, characteristics}: props) => {
    const theme = useTheme()
    const id = useId()
    return (
        <S_MachineryCard>
            <S_MachineryImageCover>

                <S_Image src = {image.src} alt = {image.alt}/>
                <HoverIcons secondLink = {""} firstLink = {""}/>

                <FontAwesomeIconCover>
                    <FontAwesomeIcon icon = {faTable} size = {'1x'} color = {theme.colors.white}/>
                </FontAwesomeIconCover>
            </S_MachineryImageCover>


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

            <S_Box $marginTop = {"1rem"}>
                <Button type = {'read more'}/>
            </S_Box>

        </S_MachineryCard>
    );
};

export const S_MachineryCard = styled.article <{}>`
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  position: relative;
  z-index: 10;
  ${ImageHover()}
`;

export const S_MachineryImageCover = styled(S_ImageContainer)`
    // ${outline(10)};
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
    padding: 0.75rem 2rem;
  }

  tr:hover {
    background-color: ${({theme}) => theme.colors.white_smoke};
    ${plainTransition()}
  }
`;




