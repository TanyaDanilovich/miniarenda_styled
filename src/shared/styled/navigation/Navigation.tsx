import styled, {css} from "styled-components";
import {plainTransition} from '../../../app/styles/mixins';

type props = { isOpen: boolean };
export const Navigation = ({isOpen}: props) => {
    return (


        <StyledNavigation $isOpen = {isOpen}>


            <nav>

                <ul>
                    <li>
                        <a href = "#">Главная</a>
                    </li>

                    <li>
                        <a href = "#">Техника</a>
                    </li>

                    <li>
                        <a href = "#">Услуги</a>
                    </li>

                    <li>
                        <a href = "#">Цены</a>
                    </li>

                    <li>
                        <a href = "#">Наши работы</a>
                    </li>

                    <li>
                        <a href = "#">Контакты</a>
                    </li>

                </ul>

            </nav>


        </StyledNavigation>


    );
};


export const StyledNavigation = styled.nav<{ $isOpen: boolean }>`

  position: absolute;
  background-color: ${props => props.theme.colors.bg_primary};
  z-index: 100;
  // transform: translateX(-200%);
  //
    // ${({theme}) => plainTransition(theme.duration.middle)}

  ${({$isOpen}) => $isOpen && css<{ $isOpen: boolean }>`
    width: 80%;
    height: auto;
    left: 0;
    //transform: translateX(0);
    //position:fixed;
  `}
  ul {
    list-style: none;
  }

  a {
    color: ${props => props.theme.colors.white};
  }
`;