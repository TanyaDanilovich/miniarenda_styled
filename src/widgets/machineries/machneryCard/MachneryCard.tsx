import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import React from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, transitionHoverIcon} from '../../../app/styles/mixins';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTable} from '@fortawesome/free-solid-svg-icons/faTable';
import {FontAwesomeIconCover} from '../../../shared/styled/FontAwesomeIconCover';
import {S_Image} from '../../../shared/styled/S_Image';
import {ReadMoreButton} from '../../../shared/ui/linkAsButton/ReadMoreButton';
import {MachineryData} from '../../../shared/types/common.types';
import {
    MachineCharacteristicsTable
} from '../../../features/machineCharacteristicsTable/MachineCharacteristicsTable';


type props = Omit<MachineryData, 'priceCharacteristics'> & {}
export const MachineryCard = ({id, title, image, characteristics}: props) => {
    const theme = useTheme()
    return (
        <S_MachineryCard>
            <S_ImageContainer>

                {image && <S_Image src = {image.src} alt = {image.alt}/>}
                {/*<HoverIcons link={""} image={image}/>*/}

                <FontAwesomeIconCover>
                    <FontAwesomeIcon icon = {faTable} size = {'1x'} color = {theme.colors.white}/>
                </FontAwesomeIconCover>
            </S_ImageContainer>

            <MachineCharacteristicsTable id = {id}
                                         title = {title}
                                         characteristics = {characteristics}/>

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








