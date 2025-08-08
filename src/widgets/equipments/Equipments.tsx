import styled, {useTheme} from 'styled-components';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';

import {EquipmentCard} from './EquipmentCard';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {API} from '../../app/api/API';
import {Equipment} from '../../shared/types/common.types';
import {S_BackgroundWrapper} from '../../shared/styled/S_BackgroundWrapper';


type props = { offset: number }

export const Equipments = ({offset}: props) => {
    const theme = useTheme();

    const equipmentsData: Equipment[] = API.getAdditionEquipmentSubcategoriesData();


    return (
        <S_Equipments id = "equipments">
            <S_BackgroundWrapper $offset = {offset} $backgroundColor = {theme.colors.white_smoke}>

                <S_OuterContainer>

                    <SectionTitle
                        title = {"Навесное оборудование"}
                        text = {"Всегда в наличии всё, что необходимо для выполнения работ"}
                    />

                    <S_EquipmentCardWrapper>
                        {equipmentsData.map(
                            (equipment, index) => {


                                return <EquipmentCard
                                    key = {`${equipment.id}-${index}`}
                                    id = {equipment.id}
                                    image = {equipment.image}
                                    title = {equipment.title}
                                    description = {equipment.description}
                                    characteristicList = {equipment.characteristicList}
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