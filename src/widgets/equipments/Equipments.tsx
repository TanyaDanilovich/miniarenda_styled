import styled from 'styled-components';
import {sectionMargin} from '../../app/styles/mixins';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import React from 'react';
import {EquipmentCard} from './EquipmentCard';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {API} from '../../app/api/API';
import {Equipment} from '../../shared/types/common.types';
import {S_Flex} from '../../shared/styled/S_Flex';


type props = {}

export const Equipments = ({}: props) => {
    const equipmentsData: Equipment[] = API.getAdditionEquipmentSubcategoriesData();
    return (
        <S_Equipments>
            <S_OuterContainer>
                <SectionTitle title = {"Всегда в наличии"}
                              text = {'Все необходимое оборудование для выполнения работ'}/>
                <S_Flex $wrap = {"wrap"} $gap = {"1rem"}>

                    <EquipmentCard key = {equipmentsData[0].id}
                                   title = {equipmentsData[0].title}
                                   description = {equipmentsData[0].description}
                    >

                    </EquipmentCard>

                    <EquipmentCard key = {equipmentsData[1].id}
                                   title = {equipmentsData[1].title}
                                   description = {equipmentsData[1].description}
                    >

                    </EquipmentCard>

                    <EquipmentCard key = {equipmentsData[2].id}
                                   title = {equipmentsData[2].title}
                                   description = {equipmentsData[2].description}
                    >

                    </EquipmentCard>

                    <EquipmentCard key = {equipmentsData[3].id}
                                   title = {equipmentsData[3].title}
                                   description = {equipmentsData[3].description}
                    >

                    </EquipmentCard>

                </S_Flex>


            </S_OuterContainer>
        </S_Equipments>
    );
};


export const S_Equipments = styled.section`
  ${sectionMargin};
`