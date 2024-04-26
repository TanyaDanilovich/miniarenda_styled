import styled from "styled-components";
import checkmark from "../../../assets/icons/checkmark-circle-green.svg"

export const S_UserLetter = styled.div<{}>`

  border-radius: 50%;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  font-size: 1.25rem;
  line-height: 3rem;
  width: 3rem;
  text-align: center;
  position: relative;


  &:after {
    position: absolute;
    content: url(${checkmark});
    line-height: 20px;
    bottom: 0;
    right: 0;
    background: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
`

export const S_UserName = styled.div<{}>`
`


export const S_ReviewCard = styled.div<{}>`
  padding: 1rem;
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};

`