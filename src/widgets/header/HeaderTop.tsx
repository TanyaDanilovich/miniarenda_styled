import styled from "styled-components";
import {outline} from '../../app/styles/mixins';

type props = {};
export const HeaderTop = ({}: props) => {
    return (


        <StyledHeaderTop>


            <div
                className = "flex bg-primary-main-color text-white px-[--doublePseudoElementsWidth] py-1.5">
                <div>
                    <a href = "mailto:miniarenda@mail.ru">
                        <span>E-mail:</span>
                        <span className = "pl-1">miniarenda@mail.ru</span>
                    </a>
                </div>
                <div>
                    <span>Время работы:</span>
                    <span>Ежедневно с 7-00 до 22-00</span>
                </div>

                <div>
                    <p>Звоните для заказа техники</p>
                    <a href = "tel:+375296949698">+375 (29) 694-96-98</a>
                    <a href = "tel:+375336949698">+375 (33) 694-96-98</a>

                </div>
            </div>


        </StyledHeaderTop>


    );
};

export const StyledHeaderTop = styled.div<{}>`
  ${outline()}
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

`;


