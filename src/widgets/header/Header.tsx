import styled from "styled-components";
import {Logo} from '../../shared/styled/Logo';
import {Navigation} from '../../shared/styled/navigation/Navigation';
import {HeaderTop} from './HeaderTop';
import {Container} from '../../shared/styled/Container';
import {BurgerButton} from '../../shared/styled/BurgerButton';
import {useState} from 'react';
import {S_Flex} from '../../shared/styled/S_Flex';

type props = {};
export const Header = ({}: props) => {

    const [isOpen, setIsOpen] = useState(false);
    const isOpenTogler = () => setIsOpen((prev) => !prev);

    return (


        <StyledHeader id = "header" className = "">
            <Container>

                <S_Flex $align = {"center"}>
                    <Logo/>
                    <Navigation/>
                    <HeaderTop/>
                    <BurgerButton isOpen = {isOpen} callback = {isOpenTogler}/>

                </S_Flex>
            </Container>
        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{}>`
  background-color: ${({theme}) => theme.colors.bg_primary};
`;


