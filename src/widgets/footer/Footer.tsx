import styled, {useTheme} from "styled-components";

import {S_Container} from '../../shared/styled/S_Container';
import {S_Flex} from '../../shared/styled/S_Flex';
import {HideContent} from '../../shared/styled/HideContent';
import image from '../../assets/images/footer/_DSC3958.jpg'
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {faMobileScreen, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {outline} from '../../app/styles/mixins';
import {S_Image} from '../../shared/styled/S_Image';

type props = {};
export const Footer = ({}: props) => {
    const theme = useTheme();
    return (


        <S_Footer>
            <S_FooterContainer>
                <S_Flex $gap = {"1rem"}>


                    <S_FooterItem>
                        <h5><span>MINIARENDA.BY</span></h5>
                        <p>Аренда&nbsp;техники&nbsp;по выгодным&nbsp;ценам</p>
                        <p>Огромный опыт в земляных&nbsp;работах</p>
                        <p>
                            <FontAwesomeIcon icon = {faPhone} size = {'1x'} color = {theme.colors.primary}/>
                            <a className = "tel" href = "tel:+375296949698">+375 29 694-96-98</a></p>
                        <p>
                            <FontAwesomeIcon icon = {faMobileScreen} size = {'1x'} color = {theme.colors.primary}/>
                            <a className = "tel" href = "tel:+375336949698">+375 33 694-96-98</a></p>
                        <p>ИП Данилович А. И.</p>
                        <p>УНП 390053113</p>
                    </S_FooterItem>

                    <S_FooterItem>
                        <h5><span>НАША</span> ТЕХНИКА</h5>
                        <S_ImageContainer>
                            <S_Image src = {image} alt = "" width = "300"/>
                        </S_ImageContainer>
                        <S_Flex $direction = {"column"}>
                            <a href = "#et1404">Wacker&nbsp;Neuson&nbsp;ET&nbsp;1404</a>
                            <a href = "#et24">Wacker&nbsp;Neuson&nbsp;ET&nbsp;24</a>
                        </S_Flex>
                    </S_FooterItem>

                    <S_FooterItem><h5><span>РАЗДЕЛЫ</span></h5>
                        <ul>
                            <li>
                                <a href = "#servises">Услуги</a>
                            </li>
                            <li>
                                <a href = "#technic">Наша техника</a>
                            </li>
                            <li>
                                <a href = "#portfolio">Наши работы</a>
                            </li>
                            <li>
                                <a href = "#feedback">Отзывы</a>
                            </li>
                            <li>
                                <a href = "#price">Стоимость бурения</a>
                            </li>
                            <li>
                                <a href = "#contacts">Контакты</a>
                            </li>

                        </ul>
                    </S_FooterItem>

                    <S_FooterItem>
                        <h5><span>НАШИ </span>УСЛУГИ</h5>
                        <ul>
                            <li>
                                <a href = "#burenie-svaj">Аренда мини экскаваторов</a>
                            </li>
                            <li>
                                <a href = "#burenie-zabor">Аренда мини экскаваторов c ямобуром</a>
                            </li>
                            <li>
                                <a href = "#burenie-svet">Аренда мини экскаваторов c гидромолотом</a>
                            </li>
                        </ul>
                    </S_FooterItem>


                </S_Flex>
                <small>
                    Copyright © 2024 miniarenda.by
                </small>
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
            </S_FooterContainer>
        </S_Footer>


    );
};

const S_FooterContainer = styled(S_Container)<{}>`

`

export const S_Footer = styled.footer<{}>`
  padding-block: 1rem;
  background-color: ${({theme}) => theme.colors.bg_primary};
  color: ${({theme}) => theme.colors.white};

  & ${S_FooterContainer} ${S_Flex} {
    flex-direction: column;

  }

  small {
    text-align: center;
    padding-top: 1rem;
  }

  @media ${({theme}) => theme.media.mobile} {
    & > ${S_FooterContainer} > ${S_Flex} {
      flex-direction: row;
      flex-wrap: wrap;

    }
  }
`;


export const S_FooterItem = styled.div<{}>`
  padding-block: 0.5rem;


  & h5 {
    position: relative;
    padding-bottom: 1rem;
    //padding-left: 2rem;
    margin-bottom: 1rem;
    display: inline-block;
    font-size: ${({theme}) => theme.fonts.size.h5};
  }

  li {
    padding: 0.5rem;
  }

  //span {
  //  position: relative;
  //}
  span:before,
  span:after {
    position: absolute;
    content: "";
    height: 5px;
    bottom: 0;
  }

  span:before {
    width: 40%;
    background-color: ${({theme}) => theme.colors.white};
    clip-path: polygon(0 0, 91% 0%, 100% 100%, 9% 100%);
  }

  span:after {
    width: 60%;
    right: 0;
    background-color: ${({theme}) => theme.colors.primary};
    clip-path: polygon(0 0, 96% 0%, 100% 100%, 6% 100%);
  }

  //miniarenda
  &:first-child {
    & p:nth-of-type(-n+2),
    & p:nth-last-of-type(-n+2) {

    }

    & p:nth-of-type(2n):not(p:last-of-type) {
      margin-bottom: 1rem;
    }

    //phone
    p:has(a) {
      font-weight: ${({theme}) => theme.fonts.weight.bold};
      font-size: ${getResponsiveSize(25, 25)};
      padding-left: 1rem;

      svg {
        position: relative;
        left: -1rem
      }
    }

  }

  //наша техника
  ${S_ImageContainer} {
    margin-bottom: 1rem;
  }

  &:has(img) {
    a {
      padding: 0.25rem;
    }
  }


  //Разделы
  &:nth-child(3) a {
    position: relative;
    padding-left: 1.5rem;

    &:before {
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      border-bottom: 3px solid ${({theme}) => theme.colors.primary};
      border-right: 3px solid ${({theme}) => theme.colors.primary};
      top: 6px;
      left: 0;
      transform: rotate(-45deg);
    }
  }

  //Наши услуги
  &:last-child a {

  }

  @media ${({theme}) => theme.media.mobile} {
    width: calc(50% - 0.5rem);
  }

  @media ${({theme}) => theme.media.tablet} {
    width: calc(25% - 0.75rem);
  }
`;




