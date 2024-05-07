import styled from "styled-components";
import {outline, outlinedNestedDiv} from '../../app/styles/mixins';
import {S_Flex} from '../../shared/styled/S_Flex';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';

type props = {};
export const HeaderTop = ({}: props) => {
    return (


        <StyledHeaderTop>


            {/*<div>*/}
            {/*    <a href = "mailto:miniarenda@mail.ru">*/}
            {/*        <span>E-mail:</span>*/}
            {/*        <span className = "pl-1">miniarenda@mail.ru</span>*/}
            {/*    </a>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <span>Время работы:</span>*/}
            {/*    <span>Ежедневно с 7-00 до 22-00</span>*/}
            {/*</div>*/}

            <S_Phone $align = {"center"} $direction = {"column"}>
                <p>Звоните для заказа техники</p>
                <a href = "tel:+375296949698">+375 (29) 694-96-98</a>
                <a href = "tel:+375336949698">+375 (33) 694-96-98</a>

            </S_Phone>


        </StyledHeaderTop>


    );
};

export const StyledHeaderTop = styled.div<{}>`

  background-color: ${({theme}) => theme.colors.bg_primary};
  color: ${({theme}) => theme.colors.white};

`;


export const S_Phone = styled(S_Flex)<{}>`
  p {
    margin-bottom: 0.5rem;
    font-size: ${getResponsiveSize(10, 19, 320, 768)};
  }


  a {
    font-weight: ${({theme}) => theme.fonts.weight.bold};
    font-size: ${getResponsiveSize(16, 38, 320, 768)};
    color: ${({theme}) => theme.colors.primary};

    &:nth-child(2) {

    }

    &:nth-child(3) {
      display: none;
    }
  }


  @media ${({theme}) => theme.media.tablet} {

    flex-direction: row;


    p, a {
      font-size: 1rem;
      font-weight: ${({theme}) => theme.fonts.weight.regular};
    }

    a {
      &:nth-child(3) {
        display: inline-block;
      }
    }
  }
`;

