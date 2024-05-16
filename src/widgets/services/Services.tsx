import styled from "styled-components";
import {S_Container} from '../../shared/styled/S_Container';
import React, {useId} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ServiceCard, ServiceCardData} from './serviceCard/ServiceCard';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin} from '../../app/styles/mixins';

type props = {
    data: ServiceCardData[]
};

export const Services = ({data}: props) => {
    const serviceTitle = "Мини-погрузчики и мини-экскаваторы в аренду"
    const serviceText = " Компания СтройМиниТехника оказывает услуги по аренде мини-техники как строительным и\n" +
        "                        производственным\n" +
        "                        компаниям, так и представителям малого бизнеса, также и частным заказчикам. Мини-экскаваторы\n" +
        "                        зарубежного\n" +
        "                        производства, которые предлагает арендовать наша компания, не подвержены поломкам, могут\n" +
        "                        бесперебойно\n" +
        "                        работать на протяжении долгого времени."
    const id = useId();
    return (
        <StyledServices>
            <S_Container>
                <SectionTitle title = {serviceTitle} text = {serviceText}/>

                <S_Flex $direction = {"column"} $gap = {"40px"} $wrap = {"wrap"}>

                    {data.map((card, index) => <ServiceCard key = {`${id}-${index}`} title = {card.title}
                                                            text = {card.text} image = {card.image}/>)}
                </S_Flex>
            </S_Container>
        </StyledServices>);
};


export const StyledServices = styled.section<{}>`
  ${sectionMargin};

  @media ${({theme}) => theme.media.tablet} {
    ${S_Flex} {
      flex-direction: row;
      gap: 1rem;
      
    }
  }
`



