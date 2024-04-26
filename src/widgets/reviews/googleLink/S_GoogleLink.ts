import styled from "styled-components";
import bgImg from "../../../assets/svg/google-logo.svg"

export const S_GoogleLink = styled.div<{}>`

  & span {
    display: block;
    text-align: center;
  }

  & span:not(:last-child) {
    margin-bottom: 0.25rem;
  }

  & span:first-child {
    font-size: 1.5rem;
    font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  }

  span:last-child {
    height: 2rem;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: top center;

  }

`


