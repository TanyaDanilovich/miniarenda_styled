import styled, {useTheme} from 'styled-components';
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import React, {useEffect, useRef, useState} from 'react';
import {EquipmentCard} from './EquipmentCard';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {API} from '../../app/api/API';
import {Equipment} from '../../shared/types/common.types';
import {S_Flex} from '../../shared/styled/S_Flex';
import {S_BackgroundWrapper} from '../../shared/styled/S_BackgroundWrapper';


type props = {offset:number}

export const Equipments = ({offset}: props) => {
    const theme = useTheme();

    const equipmentsData: Equipment[] = API.getAdditionEquipmentSubcategoriesData();

    return (
        <S_Equipments>
            <S_BackgroundWrapper $offset = {offset} $backgroundColor = {theme.colors.white_smoke}>

                <S_OuterContainer>

                    <SectionTitle title = {"Всегда в наличии"}
                                  text = {'Все необходимое оборудование для выполнения работ'}/>

                    <S_Flex $wrap = {"wrap"}>
                        {equipmentsData.map(
                            equipment => <EquipmentCard key = {equipment.id}
                                                        id = {equipment.id}
                                                        title = {equipment.title}
                                                        description = {equipment.description}
                                                        characteristicList = {equipment.characteristicList}
                            />)}
                    </S_Flex>

                </S_OuterContainer>
            </S_BackgroundWrapper>
        </S_Equipments>
    );
};

type S_EquipmentsProps = {}
export const S_Equipments = styled.section<S_EquipmentsProps>`
  & h2{
    margin-top: 2rem;
  }

  & ${S_Flex} {
    margin-top: 1rem;
    gap: 0.6rem;
  }
`