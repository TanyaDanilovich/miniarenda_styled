import styled from "styled-components";
import logo from '../assets/icons/logo.svg'
import {outline} from '../styles/mixins';


type props = {
    height?: string;
};
export const Logo = ({}: props) => {
    return <StyledLogo src = {logo}/>
};

type StyledLogoProps = {};
const StyledLogo = styled.img<StyledLogoProps>`
  ${({theme})=>outline(2,theme.colors.white)}
`;
