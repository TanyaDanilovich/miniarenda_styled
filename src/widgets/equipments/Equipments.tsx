import styled, {useTheme, css} from 'styled-components';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';

import {EquipmentCard} from './EquipmentCard';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {API} from '../../app/api/API';
import {type Equipment} from '../../shared/types/common.types';
import {S_BackgroundWrapper} from '../../shared/styled/S_BackgroundWrapper';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';


type props = { offset: number }

export const Equipments = ({offset}: props) => {
    const theme = useTheme();

    const equipmentsData: Equipment[] = API.getAdditionEquipmentSubcategoriesData();


    return (
        <S_Equipments id = "equipments">
            <S_BackgroundWrapper $offset = {offset} $backgroundColor = {theme.colors.white_smoke}>

                <S_OuterContainer>

                    <S_TitleContainer $isWithText = {true}>
                        <SectionTitle
                            title = {"Навесное оборудование"}
                            text = {"Всегда в наличии всё, что необходимо для выполнения работ"}
                        />
                    </S_TitleContainer>

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