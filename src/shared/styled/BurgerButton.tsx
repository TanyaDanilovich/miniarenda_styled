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

export const StyledBurgerButton = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  height: 50px;
  padding: 10px;
  position: relative;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;

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
      display: block;
      content: "";
      height: 3px;
      width: 30px;
      background-color: ${({theme}) => theme.colors.white_smoke};
      //left: 50%;
      transform: translateX(-50%);
      //transform: rotate(0) translateX(-50%) translateY(0);
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

  @media ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;
