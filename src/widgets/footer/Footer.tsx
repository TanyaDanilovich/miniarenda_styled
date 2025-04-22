import styled, {useTheme} from "styled-components";
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {S_Flex} from '../../shared/styled/S_Flex';
import {S_HideContent} from '../../shared/styled/S_HideContent';
import image from '../../assets/images/footer/_DSC3958.jpg'
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {S_Image} from '../../shared/styled/S_Image';
import {ROUTES_PATHS} from '../../shared/constants/ROUTES_PATHS';
import {Link} from 'react-router-dom';
import {API} from '../../app/api/API';
import {useTranslation} from 'react-i18next';
import {outline} from '../../app/styles/mixins';

type props = {};

export const Footer = ({}: props) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const servicesData = API.getServicesSubcategoriesData();

    return (
        <S_Footer>
            <S_FooterContainer>
                <S_Flex $gap="1rem">

                    <S_FooterItem>
                        <h5><span>{t('footer.companyName')}</span></h5>
                        <p>{t('footer.slogan1')}</p>
                        <p>{t('footer.slogan2')}</p>
                        <p>
                            <FontAwesomeIcon icon={faPhoneVolume} size={'1x'} color={theme.colors.primary} />
                            <a className="tel" href="tel:+375296949698">+375 29 694-96-98</a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhoneVolume} size={'1x'} color={theme.colors.primary} />
                            <a className="tel" href="tel:+375336949698">+375 33 694-96-98</a>
                        </p>
                        <p>{t('footer.owner')}</p>
                        <p>{t('footer.unp')}</p>
                    </S_FooterItem>

                    <S_FooterItem>
                        <h5><span>{t('footer.ourEquipment')}</span></h5>
                        <S_ImageContainer>
                            <S_Image src={image} alt="" width="300" />
                        </S_ImageContainer>
                        <S_Flex $direction={"column"}>
                            <a href="#et1404">Wacker&nbsp;Neuson&nbsp;ET&nbsp;1404</a>
                            <a href="#et24">Wacker&nbsp;Neuson&nbsp;ET&nbsp;24</a>
                        </S_Flex>
                    </S_FooterItem>

                    <S_FooterItem>
                        <h5><span>{t('footer.sections')}</span></h5>
                        <ul>
                            <li><Link to={ROUTES_PATHS.arenda.index.url}>{t('navigation.arenda.index')}</Link></li>
                            <li><Link to={ROUTES_PATHS.uslugi.index.url}>{t('navigation.uslugi.index')}</Link></li>
                            <li><Link to={ROUTES_PATHS.price.url}>{t('navigation.price')}</Link></li>
                            <li><Link to={ROUTES_PATHS.projects.url}>{t('navigation.projects')}</Link></li>
                            <li><Link to={ROUTES_PATHS.contacts.url}>{t('navigation.contacts')}</Link></li>
                        </ul>
                    </S_FooterItem>

                    <S_FooterItem>
                        <h5><span>{t('footer.ourServices')}</span></h5>
                        <ul>
                            {servicesData.map((service) => (
                                <li key={service.id}>
                                    <Link to={service.url}>
                                        {t(`${service.i18nKey}.title`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </S_FooterItem>

                </S_Flex>

                <small>Copyright © 2024 miniarenda.by</small>
                <S_HideContent>
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
                </S_HideContent>
            </S_FooterContainer>
        </S_Footer>


    );
};

const S_FooterContainer = styled(S_OuterContainer)<{}>`

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
    display: block;
  }

  ${S_ImageContainer} {
    width: 50%;
  }

  @media ${({theme}) => theme.mediaMinWidth.mobile} {
    & > ${S_FooterContainer} > ${S_Flex} {
      flex-direction: row;
      flex-wrap: wrap;

    }
  }
  @media ${({theme}) => theme.mediaMinWidth.computer} {
    ${S_ImageContainer} {
      //width: 100%;
    }
  }
`;


export const S_FooterItem = styled.div<{}>`
  padding-block: 0.5rem;

  & > p:first-of-type {
    margin-bottom: 1rem;
  }

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
  &:last-child li {
      //${outline()}
    font-size: ${getResponsiveSize(12, 14)};
    padding-block: 0.25rem;
  }

  @media ${({theme}) => theme.mediaMinWidth.mobile} {
    width: calc(50% - 0.5rem);
  }

  @media ${({theme}) => theme.mediaMinWidth.computer} {
    &:nth-child(odd) {
      padding-left: 4rem;
    }
  }
  @media ${({theme}) => theme.mediaMinWidth.desktop} {
    width: calc(25% - 0.75rem);
    &:nth-child(1) {
      padding-left: 0;
    }

    &:nth-child(3) {
      padding-left: 2rem;
    }
  }
`;




