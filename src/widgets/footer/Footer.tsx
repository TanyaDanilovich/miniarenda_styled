import styled, {useTheme} from "styled-components";

import {S_Container} from '../../shared/styled/S_Container';
import {S_Flex} from '../../shared/styled/S_Flex';
import {HideContent} from '../../shared/styled/HideContent';
import image from '../../assets/images/footer/_DSC3958.jpg'
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import {sectionMargin} from '../../app/styles/mixins';

type props = {};
export const Footer = ({}: props) => {
    const theme = useTheme()
    return (


        <S_Footer>
            <S_Container>
                <S_Flex $gap = {"1rem"}>


                    <S_FooterItem color = {theme.colors.red["500"]}>
                        <h5><span>MINIARENDA.BY</span></h5>
                        <p>Аренда&nbsp;техники&nbsp;по выгодным&nbsp;ценам</p>
                        <p>Огромный опыт в буровых&nbsp;работах</p>
                        <p><a className = "tel" href = "tel:+375296949698">+375 29 694-96-98</a></p>
                        <p><a className = "tel" href = "tel:+375296949698">+375 29 694-96-98</a></p>
                    </S_FooterItem>

                    <S_FooterItem color = {theme.colors.red["500"]}>
                        <h5><span>НАША</span> ТЕХНИКА</h5>
                        <S_ImageContainer>
                            <img src = {image} alt = "" width = "300"/></S_ImageContainer>
                        <S_Flex $direction = {"column"}>
                            <a href = "#et1404">Wacker&nbsp;Neuson&nbsp;ET&nbsp;1404</a>
                            <a href = "#et24">Wacker&nbsp;Neuson&nbsp;ET&nbsp;24</a>
                        </S_Flex>
                    </S_FooterItem>
                    <S_FooterItem color = {theme.colors.red["500"]}>
                        <h5><span>РАЗДЕЛЫ</span></h5>
                        <S_Flex $direction = {"column"}>
                            <a href = "#servises">Услуги</a>
                            <a href = "#technic">Наша техника</a>
                            <a href = "#portfolio">Наши работы</a>
                            <a href = "#feedback">Отзывы</a>
                            <a href = "#price">Стоимость бурения</a>
                            <a href = "#contacts">Контакты</a>
                        </S_Flex>
                    </S_FooterItem>
                    <S_FooterItem color = {theme.colors.red["500"]}>
                        <h5><span>НАШИ </span>УСЛУГИ</h5>
                        <S_Flex $direction = {"column"}>
                            <a href = "#burenie-svaj">Бурение свай под фундамент</a>
                            <a href = "#burenie-zabor">Бурение отверстий под столбы забора</a>
                            <a href = "#burenie-svet">Бурение отверстий под столбы освещения</a>
                            <a href = "#burenie-plants">Бурение ям под посадку растений </a>
                        </S_Flex>
                    </S_FooterItem>


                </S_Flex>
                <S_FooterItem color = {theme.colors.red["500"]}>
                    Copryright 2024 by miniarenda.by
                </S_FooterItem>
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
            </S_Container>
        </S_Footer>


    );
};

export const S_Footer = styled.footer<{}>`
  background-color: ${({theme}) => theme.colors.bg_primary};
  color: ${({theme}) => theme.colors.white};

  & > ${S_Container} > ${S_Flex} {
    flex-direction: column;
  }

  @media ${({theme}) => theme.media.tablet} {
    & > ${S_Container} > ${S_Flex} {
      flex-direction: row;
    }
  }
`;


export const S_FooterItem = styled.div<{ $color?: string }>`


  & h5 {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    display: inline-block;
    font-size: ${({theme}) => theme.fonts.size.h5};

  }

  span {
    display: inline-block;
  }

  span:before {
    position: absolute;
    content: "";
    width: 40%;
    height: 5px;
    background-color: ${({theme}) => theme.colors.white};
    bottom: 0;
    clip-path: polygon(0 0, 91% 0%, 100% 100%, 9% 100%);
  }

  span:after {
    position: absolute;
    content: "";
    width: 60%;
    right: 0;
    bottom: 0;
    height: 5px;
    background-color: ${({theme}) => theme.colors.primary};
    clip-path: polygon(0 0, 96% 0%, 100% 100%, 6% 100%);

  }

  @media ${({theme}) => theme.media.tablet} {
    width: 25%;
  }
`;




