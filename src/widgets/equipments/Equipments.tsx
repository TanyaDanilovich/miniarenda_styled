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
import {useTranslation} from 'react-i18next';


type props = { offset: number }

export const Equipments = ({offset}: props) => {
    const theme = useTheme();
    const {t} = useTranslation();
    const equipmentsData: Equipment[] = API.getAdditionEquipmentSubcategoriesData();

    return (
        <S_Equipments>
            <S_BackgroundWrapper $offset = {offset} $backgroundColor = {theme.colors.white_smoke}>

                <S_OuterContainer>

                    <SectionTitle
                        title = {t('equipments.title')}
                        text = {t('equipments.description')}
                    />

                    <S_EquipmentCardWrapper>
                        {equipmentsData.map(
                            (equipment) => {
                                const equipmentContent = t(equipment.i18nKey, { returnObjects: true }) as {
                                    title: string;
                                    description: string;
                                    characteristicList: string[];
                                };
                                return <EquipmentCard
                                    key={equipment.id}
                                    id={equipment.id}
                                    title={equipmentContent.title}
                                    description={equipmentContent.description}
                                    characteristicList={equipmentContent.characteristicList}
                                />
                            })}
                    </S_EquipmentCardWrapper>

                </S_OuterContainer>
            </S_BackgroundWrapper>
        </S_Equipments>
    );
};

type S_EquipmentsProps = {}
export const S_Equipments = styled.section<S_EquipmentsProps>`
  & h2 {
    margin-top: 2rem;
  }

`

export const S_EquipmentCardWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media ${({theme}) => theme.mediaMinWidth.tablet} {
    gap: 1rem;
  }

`