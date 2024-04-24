import styled, {useTheme} from "styled-components";
import {Container} from '../../shared/styled/Container';
import React, {useId} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {Flex} from '../../shared/styled/Flex';
import {MachineryCard, machineryCardData} from './machneryCard/machneryCard';

type props = {
    data: machineryCardData[]
};

export const Machineries = ({data}: props) => {
    const theme = useTheme()
    const id = useId()
    const machineryTitle = "Наша техника"
    const machineryText = " Аренда мини-экскаватора - превосходное решение для выполнения любого типа строительных работ в условиях ограниченного пространства. Они способны работать вплотную к зданиям и сооружениям, заборам, стенам, внутри зданий, то есть там, где невозможно применение крупногабаритной землеройной техники. Мини стройтехника обладает высокой производительностью при малых габаритах. В ней удачно сочетаются надёжность, маневренность и проходимость, малое давление на грунт, значительная глубина копания и относительно большая высота разгрузки."
    return (
        <StyledMachineries>
            <Container>
                <Flex $direction = {"column"} $gap = {"40px"}>
                    <SectionTitle title = {machineryTitle} text = {machineryText}/>
                    {data.map((card, index) => (
                        <MachineryCard key = {`${id}-${index}`}
                                       title = {card.title}
                                       image = {card.image}
                                       characteristics = {card.characteristics}
                        />))}


                </Flex>
            </Container>
        </StyledMachineries>);
};


export const StyledMachineries = styled.section<{}>`
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
`



