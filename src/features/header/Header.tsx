import styled from "styled-components";
import {Logo} from '../../shared/Logo';
import {Navigation} from '../navigation/Navigation';
import {HeaderTop} from './HeaderTop';
import {Container} from '../../shared/styled/Container';
import {BurgerButton} from '../BurgerButton';
import {useState} from 'react';

type props = {};
export const Header = ({}: props) => {

    const [isOpen, setIsOpen] = useState(false);
    const isOpenToggler = () => setIsOpen((prev) => !prev);

    return (


        <StyledHeader id = "header" className = "">
            <Container>


                <Logo/>
                <Navigation/>
                <HeaderTop/>
                <BurgerButton isOpen = {isOpen} callback = {isOpenToggler}/>


            </Container>
        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{}>`
  background-color: ${({theme}) => theme.colors.bg_primary};
`;


