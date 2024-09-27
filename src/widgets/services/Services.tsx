import styled from "styled-components";
import {S_Container} from '../../shared/styled/S_Container';
import React, {useEffect, useId, useState} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ServiceCard} from './serviceCard/ServiceCard';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin} from '../../app/styles/mixins';
import {getServicesData} from '../../shared/utils/getServicesData';
import {BREAKPOINTS, MAIN_DATA} from '../../shared/constants';
import {useDebouncedWindowSize} from '../../shared/hooks/useDebounsedWindowSize';

type props = {
    // data: ServiceCardData[]
};

export const Services = ({}: props) => {
//&#8288;
    const serviceTitle = `Мини-погрузчики и мини-экскаваторы в аренду`
    const serviceText = " Компания СтройМиниТехника оказывает услуги по аренде мини-техники как строительным и\n" +
        "                        производственным\n" +
        "                        компаниям, так и представителям малого бизнеса, также и частным заказчикам. Мини-экскаваторы\n" +
        "                        зарубежного\n" +
        "                        производства, которые предлагает арендовать наша компания, не подвержены поломкам, могут\n" +
        "                        бесперебойно\n" +
        "                        работать на протяжении долгого времени."
    const id = useId();

    const fullServicesData = getServicesData(MAIN_DATA);
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
            <S_Container>
                <SectionTitle title = {serviceTitle} text = {serviceText}/>

                <S_Flex $direction = {"column"} $gap = {"1rem"} $wrap = {"wrap"}>

                    {servicesData.map((card, index) =>
                        <ServiceCard key = {`${id}-${index}`}
                                     title = {card.title}
                                     text = {card.text}
                                     image = {card.image}
                                     typeTitle = {card.typeTitle}
                                     typeUrl = {card.typeUrl}
                                     url = {card.url}
                        />)}
                </S_Flex>
            </S_Container>
        </StyledServices>);
};


export const StyledServices = styled.section<{}>`
  ${sectionMargin};

  @media ${({theme}) => theme.media.mobile} {
    ${S_Flex} {
      flex-direction: row;
      //gap: 1rem;

    }
  }
`



