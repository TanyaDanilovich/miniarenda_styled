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

  --burgerHeight: 50px; //кратно 5
  --burgerLineHeight: 3px;

  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  height: var(--burgerHeight);
  padding: calc(var(--burgerHeight) / 5);
  position: relative;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: calc(var(--burgerHeight) / 5);

  span {
    display: block;
    height: var(--burgerLineHeight);
    width: calc(var(--burgerHeight) - (var(--burgerHeight) / 5 * 2));
    background-color: ${({theme}) => theme.colors.white_smoke};
    //transition: 0.5s;

    ${(props) =>
            props.$isOpen &&
            css<{ $isOpen: boolean }>`
              background-color: transparent;
            `}
    &:before,
    &:after {
      --width: calc(var(--burgerHeight) - (var(--burgerHeight) / 5));
      --translateSize: calc(var(--width) / 10);
      position: absolute;
      display: block;
      content: "";
      height: var(--burgerLineHeight);
      width: calc(var(--burgerHeight) - (var(--burgerHeight) / 5 * 2));
      background-color: ${({theme}) => theme.colors.white_smoke};
      transform: translateX(-50%);
      transition: ${({theme}) => theme.duration.middle};
    }

    &:before {
      transform: translateY(calc(var(--burgerHeight) / 5));

      ${(props) =>
              props.$isOpen &&
              css<{ $isOpen: boolean }>`
                transform: rotate(-45deg) translateX(calc(var(--translateSize) * -1)) translateY(calc(var(--translateSize) * -1));
                width: var(--width);
              `}
    }

    &:after {
      transform: translateY(calc(var(--burgerHeight) / 5 * -1));

      ${(props) =>
              props.$isOpen &&
              css<{ $isOpen: boolean }>`
                transform: rotate(45deg) translateX(calc(var(--translateSize) * -1)) translateY(var(--translateSize));
                width: var(--width);
              `}
    }


  }

  @media ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;
