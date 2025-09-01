import styled, {css} from "styled-components";
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';

import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {S_Flex} from '../../shared/styled/S_Flex';
import {MachineryCard} from './machneryCard/MachneryCard';
import {sectionPadding} from '../../app/styles/mixins';
import {type MachineryCharacteristicKeys} from '../../shared/types/common.types';
import {API} from '../../app/api/API';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';


type props = {};

export const Machineries = ({}: props) => {

    const keys: MachineryCharacteristicKeys[] = [
        "weight",
        "dimensions",
        "diggingDepth",
        // "speed",
        // "width",
        // "clearance",
        "buckets",
        "augers",
        // "country",
    ]
    const machineryData = API.getMachineriesData(keys);

    const machineryTitle = "Наша техника"
    const machineryText = "Уже более 10 лет мы работаем на немецкой технике торговой марки Wacker Neuson, которая считается лучшей в мире."
    return (
        <StyledMachineries id = {"machineries"}>
            <S_OuterContainer>
                <S_TitleContainer $isWithText = {!!machineryText}>
                    <SectionTitle title = {machineryTitle} text = {machineryText}/>
                </S_TitleContainer>

                <S_Flex $direction = {"column"} $gap = {"40px"}>

                    {machineryData.map((card) => (
                        <MachineryCard key = {card.id}
                                       id = {card.id}
                                       title = {card.title}
                                       image = {card.image}
                                       characteristics = {card.characteristics}
                        />))}


                </S_Flex>
            </S_OuterContainer>
        </StyledMachineries>);
};


export const StyledMachineries = styled.section<{}>`

    ${sectionPadding};
    background-color:${({theme}) => theme.colors.black};
    color:${({theme}) => theme.colors.white};
    @media ${({theme}) => theme.mediaMinWidth.tablet}{
        ${S_Flex}{
            flex-direction:row;
            gap:2rem;
        }
    }

`

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



