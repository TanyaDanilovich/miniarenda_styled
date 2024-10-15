import styled from "styled-components";
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import React from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {S_Flex} from '../../shared/styled/S_Flex';
import {MachineryCard} from './machneryCard/MachneryCard';
import {sectionMargin} from '../../app/styles/mixins';
import {MachineryData} from '../../shared/types/common.types';

type props = {
    data: MachineryData[]
};

export const Machineries = ({data}: props) => {

    const machineryTitle = "Наша техника"
    const machineryText = " Аренда мини-экскаватора - превосходное решение для выполнения любого типа строительных работ в условиях ограниченного пространства. Они способны работать вплотную к зданиям и сооружениям, заборам, стенам, внутри зданий, то есть там, где невозможно применение крупногабаритной землеройной техники. Мини стройтехника обладает высокой производительностью при малых габаритах. В ней удачно сочетаются надёжность, маневренность и проходимость, малое давление на грунт, значительная глубина копания и относительно большая высота разгрузки."
    return (
        <StyledMachineries id = {"machineries"}>
            <S_OuterContainer>
                <SectionTitle title = {machineryTitle} text = {machineryText}/>

                <S_Flex $direction = {"column"} $gap = {"40px"}>

                    {data.map((card) => (
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
  padding-block: 3rem;
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  ${sectionMargin} @media ${({theme}) => theme.media.tablet} {
  ${S_Flex} {
    flex-direction: row;
    gap: 2rem;

  }
}

`



