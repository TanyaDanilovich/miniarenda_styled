import styled from "styled-components";
import {sectionMargin} from '../../app/styles/mixins';
import bgImg from "../../assets/png/reviews-bg.png"

export const S_Reviews = styled.section<{}>`
  background-image: url(${bgImg});

  ${sectionMargin};
  padding-block: 2rem;


  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  //position: relative;
  background-repeat: no-repeat;
  background-color: ${({theme}) => theme.colors.white_smoke};
`


