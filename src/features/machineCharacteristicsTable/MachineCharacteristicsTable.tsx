import React from 'react';
import {MachineryData} from '../../shared/types/common.types';
import {S_Table, S_TableTitle, S_Tr} from '../../shared/styled/S_Table';
import styled from 'styled-components';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';

type props = Pick<MachineryData, 'id' | 'title' | 'characteristics'> & {};

export const MachineCharacteristicsTable = ({title, characteristics, id,}: props) => {


    return (
        <S_MachineCharacteristicsTable>
            <S_TableTitle>
                {title}
            </S_TableTitle>

            <thead>
            <S_Tr>
                <th>Наименование</th>
                <th>Характеристика</th>
            </S_Tr>
            </thead>

            <tbody>
            {characteristics.map((characteristic, index) => (
                <S_Tr key = {`${id}-${index}`}>
                    <td>{characteristic.title}</td>
                    <td>{characteristic.value}</td>
                </S_Tr>))}
            </tbody>
        </S_MachineCharacteristicsTable>
    );
}

export const S_MachineCharacteristicsTable = styled(S_Table)`

  font-size: ${getResponsiveSize(14, 16, 320, 768)};

  ${S_TableTitle} {
    font-size: ${getResponsiveSize(20, 32, 320, 768)};
  }

`