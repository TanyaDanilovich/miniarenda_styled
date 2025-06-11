import styled from "styled-components";
import logo from '../../assets/icons/logo.svg'


type props = {
    height?: string;
};
export const Logo = ({}: props) => {
    return <S_LogoContainer>
        <S_Logo src = {logo} alt={"miniarenda.by"}/>
    </S_LogoContainer>


};

const S_LogoContainer = styled.div<{}>`
  display: none;
  max-height: 110px;
  padding: 1rem 2rem 1rem 1rem;
  @media ${({theme}) => theme.mediaMinWidth.tablet} {
    display: block;

  }
`


const S_Logo = styled.img<{}>`
  object-fit: cover;
  height: 100%;
`;
