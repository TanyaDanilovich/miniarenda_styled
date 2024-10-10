import styled from 'styled-components';
import React from 'react';
import {MachineCharacteristicsTable} from '../../features/machineCharacteristicsTable/MachineCharacteristicsTable';
import {MachineryData} from '../../shared/types/common.types';
import {S_Flex} from '../../shared/styled/S_Flex';
import {S_Box} from '../../shared/styled/S_Box';


type props = MachineryData & {}
export const ExcavatorRentalCard = ({
                                        id, characteristics,
                                        tableTitle,
                                        ...rest
                                    }: props) => {

    return (
        <S_ExcavatorRentalCard>


            {/*<h4>{tableTitle}</h4>*/}

            <S_Flex $wrap = {"wrap"}>
                <S_Box>
                    <h2>Цена услуг мини-экскаватора</h2>
                    <p>70,00 руб/час</p>
                    <p>Минимальный заказ — 4 машино-часа.</p>
                    <p>Минимальный заказ (безнал)  — 8 машино-часов.</p>
                    <p>Время работы - с 8:00 до 22:00 без выходных</p>
                    <p>Аренда мини-экскаватора Bobcat E19
                       от 85 руб/час</p>
                </S_Box>
                <MachineCharacteristicsTable id = {id}
                                             title = {tableTitle}
                                             characteristics = {characteristics}
                />
            </S_Flex>

        </S_ExcavatorRentalCard>
    );
};

export const S_ExcavatorRentalCard = styled.section <{}>`

  @media ${({theme}) => theme.media.mobile} {

  }


`;
