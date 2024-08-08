import styled from "styled-components";
import {Logo} from '../../shared/styled/Logo';
import {HeaderTop} from './HeaderTop';
import {useState} from 'react';
import {S_Flex} from '../../shared/styled/S_Flex';
import {Navigation} from '../../shared/ui/navigation/Navigation';
import {StyledMain} from '../main/Main';
import {S_Container} from '../../shared/styled/S_Container';


type props = {};
export const Header = ({}: props) => {

    const [isOpen, setIsOpen] = useState(false);
    const isOpenToggle = () => setIsOpen((prev) => !prev);
    const setClose = () => setIsOpen(false);

    return (


        <StyledHeader $isOpen = {isOpen}>
            <S_Container>

                <Logo/>
                <S_Flex $direction = {"row"} $align = {"center"} $justify = {"space-between"} $grow = {"1"}>
                    <HeaderTop/>
                    <Navigation isOpen = {isOpen} isOpenToggle = {isOpenToggle} setClose = {setClose}/>
                </S_Flex>
            </S_Container>

        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{ $isOpen: boolean }>`
  background-color: ${({theme}) => theme.colors.bg_primary};
  padding-block: 0.5rem;
  padding-inline: 1rem;
  position: sticky;
  z-index: ${({theme}) => theme.zIndices.header};
  top: 0;
  left: 0;
  width: 100%;


  display: flex;


  & ~ ${StyledMain} {
    touch-action: ${({$isOpen}) => $isOpen ? "none" : "auto"};
  }

  @media ${({theme}) => theme.media.tablet} {
    padding: 0;
    ${S_Container} > ${S_Flex} {
      flex-direction: column;
    }

  }

  ${S_Container} {

    display: flex;
    padding-inline: 0;

    @media ${({theme}) => theme.media.desktop} {
      max-width: min(calc(100vw - 6rem), 1500px);
    }
  }

`;


