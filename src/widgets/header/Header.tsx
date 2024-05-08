import styled from "styled-components";
import {Logo} from '../../shared/styled/Logo';
import {HeaderTop} from './HeaderTop';
import {useState} from 'react';
import {S_Flex} from '../../shared/styled/S_Flex';
import {MobileNavigation} from '../../shared/styled/navigation/MobileNavigation';
import {outlinedNestedDiv} from '../../app/styles/mixins';


type props = {};
export const Header = ({}: props) => {

    const [isOpen, setIsOpen] = useState(false);
    const isOpenToggle = () => setIsOpen((prev) => !prev);
    const closeToggle = () => setIsOpen(false);

    return (


        <StyledHeader>


            <S_Flex $align = {"center"} $justify = {"space-between"}>
                <Logo/>
                <S_Flex $align = {"center"} $justify = {"space-between"} $grow = {"1"}>
                    <HeaderTop/>
                    <MobileNavigation isOpen = {isOpen} isOpenToggle = {isOpenToggle} closeToggle = {closeToggle}/>
                    {/*<Navigation isOpen = {isOpen}/>*/}
                </S_Flex>


            </S_Flex>


        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{}>`
  background-color: ${({theme}) => theme.colors.bg_primary};
  padding: 0.5rem;
  position: sticky;
  z-index: ${({theme}) => theme.zIndices.header};
  top: 0;
  left: 0;
  width: 100%;

    //${outlinedNestedDiv}
`;


