import styled from "styled-components";
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import React, {useEffect, useState} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ServiceCard} from './serviceCard/ServiceCard';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin} from '../../app/styles/mixins';
import {useDebouncedWindowSize} from '../../shared/hooks/useDebounsedWindowSize';
import {BREAKPOINTS} from '../../shared/constants/BREAKPOINTS';
import {API} from '../../app/api/API';
import { useTranslation } from 'react-i18next';


type props = {};

export const Services = ({}: props) => {
    const { t } = useTranslation();

//&#8288;
    const serviceTitle = t('services.title');
    const serviceText = t('services.description');
    // const serviceTitle = `Мини-погрузчики и мини-экскаваторы в аренду`
    // const serviceText = " Компания СтройМиниТехника оказывает услуги по аренде мини-техники как строительным и\n" +
    //     "                        производственным\n" +
    //     "                        компаниям, так и представителям малого бизнеса, также и частным заказчикам. Мини-экскаваторы\n" +
    //     "                        зарубежного\n" +
    //     "                        производства, которые предлагает арендовать наша компания, не подвержены поломкам, могут\n" +
    //     "                        бесперебойно\n" +
    //     "                        работать на протяжении долгого времени."


    const fullServicesData = API.getFullSubcategoriesData();
    const [servicesData, setServicesData] = useState(fullServicesData);
    const [width] = useDebouncedWindowSize();

    useEffect(() => {
        if (width <= parseInt(BREAKPOINTS.mobile)) {
            setServicesData(fullServicesData)
        } else if (width > parseInt(BREAKPOINTS.mobile) && width <= parseInt(BREAKPOINTS.tablet)) {
            fullServicesData.length = ~~(fullServicesData.length / 2) * 2
            setServicesData(fullServicesData)
        } else {
            fullServicesData.length = ~~(fullServicesData.length / 3) * 3
            setServicesData(fullServicesData)
        }
    }, [width]);

    return (
        <StyledServices>
            <S_OuterContainer>
                <SectionTitle title = {serviceTitle} text = {serviceText}/>

                <S_Flex $direction = {"column"} $gap = {"1rem"} $wrap = {"wrap"}>

                    {servicesData.map((card) =>
                        <ServiceCard
                            key={card.id}
                            {...card}
                        />)}
                </S_Flex>
            </S_OuterContainer>
        </StyledServices>);
};


export const StyledServices = styled.section<{}>`
  ${sectionMargin};

  @media ${({theme}) => theme.mediaMinWidth.mobile} {
    ${S_Flex} {
      flex-direction: row;
      //gap: 1rem;

    }
  }
`



