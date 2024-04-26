import styled, {css} from "styled-components";


type props = {
    isOpen: boolean;
    callback: () => void;
};
export const BurgerButton = ({isOpen, callback}: props) => {
    return (
        <StyledBurgerButton $isOpen = {isOpen} onClick = {callback}>
            <span></span>
        </StyledBurgerButton>
    );
};

const StyledBurgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  border: none;
  @media ${({theme}) => theme.media.tablet} {
    display: flex;
  }
  width: 40px;
  height: 40px;
  padding: 5px;
  position: relative;
  justify-content: center;
  align-items: center;
  //border: none;

  span {
    display: block;
    height: 3px;
    width: 30px;
    background-color: ${({theme}) => theme.colors.white_smoke};
    //transition: 0.5s;

    ${(props) =>
            props.$isOpen &&
            css<{ $isOpen: boolean }>`
              background-color: transparent;
            `}
    &:before,
    &:after {
      position: absolute;
      content: "";
      height: 3px;
      width: 30px;
      background-color: ${({theme}) => theme.colors.white_smoke};
      left: 5px;
      transform: rotate(0) translateX(0) translateY(0);
      transition: ${({theme}) => theme.duration.middle};
    }

    &:before {
      transform: translateY(10px);

      ${(props) =>
              props.$isOpen &&
              css<{ $isOpen: boolean }>`
                transform: rotate(-45deg) translateX(-4px) translateY(-4px);
                width: 40px;
              `}
    }

    &:after {
      transform: translateY(-10px);

      ${(props) =>
              props.$isOpen &&
              css<{ $isOpen: boolean }>`
                transform: rotate(45deg) translateX(-4px) translateY(4px);
                width: 40px;
              `}
    }
  }
`;
