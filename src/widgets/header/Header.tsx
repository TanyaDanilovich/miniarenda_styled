import styled from "styled-components";
import {Logo} from '../../shared/styled/Logo';
import {HeaderTop} from './HeaderTop';
import {useState} from 'react';
import {S_Flex} from '../../shared/styled/S_Flex';
import {Navigation} from '../../shared/ui/navigation/Navigation';
import {StyledMain} from '../main/Main';


type props = {};
export const Header = ({}: props) => {

    const [isOpen, setIsOpen] = useState(false);
    const isOpenToggle = () => setIsOpen((prev) => !prev);
    const closeToggle = () => setIsOpen(false);

    return (


        <StyledHeader $isOpen = {isOpen}>


            <Logo/>
            <S_Flex $direction = {"row"} $align = {"center"} $justify = {"space-between"} $grow = {"1"}>
                <HeaderTop/>
                <Navigation isOpen = {isOpen} isOpenToggle = {isOpenToggle} closeToggle = {closeToggle}/>
            </S_Flex>


        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{$isOpen: boolean}>`
  display: flex;
  background-color: ${({theme}) => theme.colors.bg_primary};
  padding: 0.5rem;
  position: sticky;
  z-index: ${({theme}) => theme.zIndices.header};
  top: 0;
  left: 0;
  width: 100%;


  & ~ ${StyledMain} {

    touch-action: ${({$isOpen}) => $isOpen ? "none" : "auto"};
  }

`;


