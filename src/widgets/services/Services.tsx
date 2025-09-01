import styled, {css} from "styled-components";
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {useEffect, useState} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ServiceCard} from './serviceCard/ServiceCard';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import {useDebouncedWindowSize} from '../../shared/hooks/useDebounsedWindowSize';
import {BREAKPOINTS} from '../../shared/constants/BREAKPOINTS';
import {API} from '../../app/api/API';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';

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
        const newServicesData = [...fullServicesData];
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
                <S_TitleContainer $isWithText = {!!serviceText}>
                    <SectionTitle title = {serviceTitle} text = {serviceText}/>
                </S_TitleContainer>
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

const S_TitleContainer = styled.div<{ $isWithText: boolean }>`
  margin-block: ${getResponsiveSize(BASE * 2, BASE * 4)};
  white-space: normal;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  @media ${({theme}) => theme.mediaMinWidth.largeMobile} {
    display: flex;
    gap: 1rem;
    width: 100%;

    ${({$isWithText}) => $isWithText && css`
      border-left: 5px solid ${({theme}) => theme.colors.primary};
      align-items: center;

      @media ${({theme}) => theme.mediaMinWidth.tablet} {
        p {
          width: 50%;
        }
      }
    `}
  }
`;
