import styled from 'styled-components';
import React from 'react';
import {MachineCharacteristicsTable} from '../../features/machineCharacteristicsTable/MachineCharacteristicsTable';
import {MachineryData} from '../../shared/types/common.types';


type props = MachineryData & {}
export const ExcavatorRentalCard = ({id,characteristics,
                                        tableTitle,
                                        ...rest
                                    }: props) => {

    return (
        <S_ExcavatorRentalCard>


                {/*<h4>{tableTitle}</h4>*/}



            <MachineCharacteristicsTable id = {id}
                                         title = {tableTitle}
                                         characteristics = {characteristics}
            />

        </S_ExcavatorRentalCard>
    );
};

export const S_ExcavatorRentalCard = styled.section <{}>`

  @media ${({theme}) => theme.media.mobile} {

  }




`;
