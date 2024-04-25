import styled, {useTheme} from "styled-components";

import {Container} from '../../shared/styled/Container';
import {S_Flex} from '../../shared/styled/S_Flex';
import {HideContent} from '../../shared/styled/HideContent';
import {outline} from '../../app/styles/mixins';
import image from '../../assets/images/footer/_DSC3958.jpg'
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';

type props = {};
export const Footer = ({}: props) => {
    const theme = useTheme()
    return (


        <StyledFooter>
            <Container>
                <FooterFlexWrapper>


                    <StyledFooterItem color = {theme.colors.red["500"]}>
                        <h5>MINIARENDA.BY</h5>
                        <p>Аренда&nbsp;техники&nbsp;по выгодным&nbsp;ценам</p>
                        <p>Огромный опыт в буровых&nbsp;работах</p>
                        <p><a className = "tel" href = "tel:+375296949698">+375 29 694-96-98</a></p>
                        <p><a className = "tel" href = "tel:+375296949698">+375 29 694-96-98</a></p>
                    </StyledFooterItem>

                    <StyledFooterItem color = {theme.colors.red["500"]}>
                        <h5>НАША ТЕХНИКА</h5>
                        <S_ImageContainer>
                            <img src = {image} alt = "" width = "300"/></S_ImageContainer>
                        <S_Flex $direction = {"column"}>
                            <a href = "#et1404">Wacker&nbsp;Neuson&nbsp;ET&nbsp;1404</a>
                            <a href = "#et24">Wacker&nbsp;Neuson&nbsp;ET&nbsp;24</a>
                        </S_Flex>
                    </StyledFooterItem>
                    <StyledFooterItem color = {theme.colors.red["500"]}>
                        <h5>РАЗДЕЛЫ</h5>
                        <S_Flex $direction = {"column"}>
                            <a href = "#servises">Услуги</a>
                            <a href = "#technic">Наша техника</a>
                            <a href = "#portfolio">Наши работы</a>
                            <a href = "#feedback">Отзывы</a>
                            <a href = "#price">Стоимость бурения</a>
                            <a href = "#contacts">Контакты</a>
                        </S_Flex>
                    </StyledFooterItem>
                    <StyledFooterItem color = {theme.colors.red["500"]}>
                        <h5>НАШИ УСЛУГИ</h5>
                        <S_Flex $direction = {"column"}>
                            <a href = "#burenie-svaj">Бурение свай под фундамент</a>
                            <a href = "#burenie-zabor">Бурение отверстий под столбы забора</a>
                            <a href = "#burenie-svet">Бурение отверстий под столбы освещения</a>
                            <a href = "#burenie-plants">Бурение ям под посадку растений </a>
                        </S_Flex>
                    </StyledFooterItem>


                </FooterFlexWrapper>
                <StyledFooterItem color = {theme.colors.red["500"]}>
                    Copryright 2024 by miniarenda.by
                </StyledFooterItem>
                <HideContent>
                    <p>Предосталяем в аренду мини-экскаватор в Минске и
                       Минской области
                       (Атолино, Богатырево,
                       Большевик, Большой
                       тростенец, Боровляны, Воложин, Гатово, Городище, Дворище,
                       Дзержинск, Ждановичи,
                       Замосточье, Заславль,
                       Колодищи, Копище,
                       Королев Стан, Лапоровичи, Логойск, Логойск, Лошаны, Марьина
                       Горка, Марьяливо,
                       Мачулищи,
                       Михановичи, Новоселье, Новый двор, Озерцо, Острошицкий городок,
                       Петришки,
                       Привольный, Прилуки,
                       Радошковичи, Ратомка,
                       Раубичи, Самохваловичи, Семково, Слобода, Старое село, Столбцы,
                       Сухорукие,
                       Тарасово, Узда, Фаниполь,
                       Хатежино, Цнянка,
                       Чачково, Червень, Черкассы, Чуденичи, Чуриловичи)</p>
                </HideContent>
            </Container>
        </StyledFooter>


    );
};

export const StyledFooter = styled.footer<{}>`
  background-color: ${({theme}) => theme.colors.bg_primary};
  color: ${({theme}) => theme.colors.white};`;


export const StyledFooterItem = styled.div<{ $color?: string }>`
  ${({$color}) => outline(3, $color)}
`;

export const FooterFlexWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
`

