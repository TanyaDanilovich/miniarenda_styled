import styled from "styled-components";
import {sectionMargin} from '../../app/styles/mixins';


export const S_Questions = styled.section<{}>`
  background-color: ${({theme}) => theme.colors.white};
  ${sectionMargin}
`
