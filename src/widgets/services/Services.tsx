import styled from "styled-components";
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import React, {useEffect, useId, useState} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ServiceCard} from './serviceCard/ServiceCard';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin} from '../../app/styles/mixins';
import {useDebouncedWindowSize} from '../../shared/hooks/useDebounsedWindowSize';
import {BREAKPOINTS} from '../../shared/constants/BREAKPOINTS';
import {API} from '../../app/api/API';
import {useTranslation} from 'react-i18next';

type props = {};

export const Services = ({}: props) => {
    const {t} = useTranslation();

    const serviceTitle = t('categories.services.title');
    const serviceText = t('categories.services.description');

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
        <StyledServices>
            <S_OuterContainer>
                <SectionTitle title = {serviceTitle} text = {serviceText}/>
                <S_Flex $direction = {"column"} $gap = {"1rem"} $wrap = {"wrap"}>
                    {servicesData.map(card => (
                        <ServiceCard
                            key = {card.id}
                            data = {card}
                        />
                    ))}
                </S_Flex>
            </S_OuterContainer>
        </StyledServices>
    );
};

export const StyledServices = styled.section`
  ${sectionMargin};

  @media ${({theme}) => theme.mediaMinWidth.mobile} {
    ${S_Flex} {
      flex-direction: row;
    }
  }
`;
