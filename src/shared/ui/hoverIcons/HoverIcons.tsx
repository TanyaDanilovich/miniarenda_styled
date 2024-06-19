import styled, {useTheme} from 'styled-components';
import {outline, plainTransition} from '../../../app/styles/mixins';
import {faLinkSlash, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {S_ImageContainer} from '../../styled/S_ImageContainer';
import {S_Image} from '../../styled/S_Image';
import React, {useId} from 'react';
import {ImageProps, PropsWithChildren} from '../../types/common.types';


type props = {
    link: string,
    image: ImageProps
};
export const HoverIcons = ({link, image, children}: PropsWithChildren<props>) => {
    const theme = useTheme()
    const popoverId = useId()
    const newImage = () => <S_Image src = {image.src} alt = {image.alt}/>

    return (
        <S_HoverIcons>


            <a href = {link}>
                <FontAwesomeIcon icon = {faLinkSlash} size = {'1x'} color = {theme.colors.primary}/>
            </a>


            <button popoverTarget = {popoverId}>
                <FontAwesomeIcon icon = {faSearch} size = {'1x'} color = {theme.colors.primary}/>
            </button>

            <div popover = {"auto"} id = {popoverId}>

                {/*<button popoverTarget = {popoverId} popoverTargetAction="hide">*/}
                {/*    <span>❌</span>*/}
                {/*    <p className ="sr-only">Close</p>*/}
                {/*</button>*/}

                <S_ImageContainer>
                    {newImage()}
                </S_ImageContainer>
            </div>
        </S_HoverIcons>);
};


export const S_HoverIcons = styled.div<{}>`
  position: absolute;
  width: 100%;
  line-height: 100%;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);

  a, button {
    position: absolute;
    display: block;
    width: 2.75rem;
    line-height: 2.75rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    transform: translateY(-50%);
  }

  [popover]::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }

  [popover] {
    position: fixed;
    width: 80vw;
    height: fit-content;
    color: canvastext;
    background-color: canvas;
    margin: auto;
    border: none;
    padding: 0;
    overflow: hidden;


  }

`;