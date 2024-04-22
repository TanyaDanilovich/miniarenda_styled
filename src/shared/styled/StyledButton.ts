import styled, {css} from "styled-components";


type LinkAsButtonProps = {
    $monocolor?: boolean,
    $bicolor?: boolean
};

const transition=css`
  transition: all ${({theme})=>theme.duration.short} linear;
`
export const StyledButton = styled.a<LinkAsButtonProps>`

  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  padding-block: 0.5rem;
  padding-right: 1rem;
  padding-left: 2rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.primary};
  position: relative;
  overflow: hidden;
  z-index: 10;

  ${transition}
  & span:nth-child(2) {
    position: relative;
    display: inline-block;
    z-index: 100;
    padding-left: 0.5rem;
  }

  ${({$monocolor}) =>
          $monocolor && css`
            &:after {
              content: " ";
              position: absolute;
              z-index: -1;
              display: block;
              width: 100%;
              height: 100%;
              top: 0;
              right: -2.3rem;
              transform-origin: bottom left;
              -ms-transform: skew(-20deg, 0deg);
              transform: skew(-20deg, 0deg);
              border-left: 2px solid ${({theme}) => theme.colors.white};
              background-color: ${({theme}) => theme.colors.bg_primary};
              ${transition}
            }`
  }
  &:hover {
    background-color: ${({theme}) => theme.colors.bg_primary};

    .fa-circle-plus {
      color: ${({theme}) => theme.colors.white};
      ${transition}
    }

    ${({$monocolor}) =>
            $monocolor && css`
              &:after {
                background-color: ${({theme}) => theme.colors.secondary};
              }`
    }
    & span:nth-child(1) {
      background-color: ${({theme}) => theme.colors.bg_primary};
      ${transition}
    }
  }
`;


