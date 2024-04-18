import styled from "styled-components";
import {Logo} from '../../shared/Logo';
import {Navigation} from '../navigation/Navigation';
import {HeaderTop} from './HeaderTop';
import {Container} from '../../shared/styled/Container';

type props = {};
export const Header = ({}: props) => {
    return (


        <StyledHeader id = "header" className = "">
            <Container>


                <Logo/>
                <Navigation/>
                <HeaderTop/>


            </Container>
        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{}>`
  background-color: ${props => props.theme.colors.bg_primary};
`;


