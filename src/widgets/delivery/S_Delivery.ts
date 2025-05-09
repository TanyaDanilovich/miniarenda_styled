import styled from "styled-components";
import {sectionMargin} from '../../app/styles/mixins';


export const S_Delivery = styled.section<{}>`
  background-color: ${({theme}) => theme.colors.white};
  ${sectionMargin}
`

export const S_DeliveryPrice = styled.div<{}>`
    // background-color: ${({theme}) => theme.colors.black};
    // color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fonts.size.h4};
  font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  text-decoration: underline;
  text-align: center;
  margin-top: 2rem;
`
