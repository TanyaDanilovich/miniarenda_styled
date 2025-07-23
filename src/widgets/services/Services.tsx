import styled from "styled-components";
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import React, {useEffect, useId, useState} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ServiceCard} from './serviceCard/ServiceCard';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import {useDebouncedWindowSize} from '../../shared/hooks/useDebounsedWindowSize';
import {BREAKPOINTS} from '../../shared/constants/BREAKPOINTS';
import {API} from '../../app/api/API';

type props = {};

export const Services = ({}: props) => {

    const [openIndex, setOpenIndex] = useState<string | null>(null)


    const toggleDescription = (index: string) => {
        setOpenIndex(openIndex !== index ? index : null)
    };
    const serviceTitle = "Услуги";
    const serviceText = "Основные виды выполняемых работ.";

    const fullServicesData = API.getFullSubcategoriesData();
    const [servicesData, setServicesData] = useState(fullServicesData);
    const [width] = useDebouncedWindowSize();

    useEffect(() => {
        let newServicesData = [...fullServicesData];
        if (width <= parseInt(BREAKPOINTS.mobile)) {
            // оставить как есть
        } else if (width > parseInt(BREAKPOINTS.mobile) && width <= parseInt(BREAKPOINTS.tablet)) {
            newServicesData.length = ~~(newServicesData.length / 2) * 2;
        } else {
            newServicesData.length = ~~(newServicesData.length / 3) * 3;
        }
        setServicesData(newServicesData);
    }, [width]);


    return (
        <StyledServices id = {"services"}>
            <S_OuterContainer>
                <SectionTitle title = {serviceTitle} text = {serviceText}/>
                <S_Flex $direction = {"column"} $rowGap = {"2rem"} $wrap = {"wrap"}>
                    {servicesData.map((card, index) => (
                        <ServiceCard
                            key = {`${card.id}-${index}`}
                            data = {card}
                            toggleDescriptionCallback = {() => toggleDescription(`${card.id}-${index}`)}
                            isOpen = {openIndex === `${card.id}-${index}`}
                        />
                    ))}
                </S_Flex>
            </S_OuterContainer>
        </StyledServices>
    );
};

export const StyledServices = styled.section<{}>`
  ${sectionMargin};
  ${sectionPadding};

  ${S_Flex} {
    align-items: flex-start;
  }

  @media ${({theme}) => theme.mediaMinWidth.mobile} {
    ${S_Flex} {
      flex-direction: row;
    }
  }
`;
