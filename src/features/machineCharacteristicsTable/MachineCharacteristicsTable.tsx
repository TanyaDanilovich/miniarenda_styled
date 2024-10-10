import React from 'react';
import styled from 'styled-components';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';
import {plainTransition} from '../../app/styles/mixins';
import {MachineryData} from '../../shared/types/common.types';

type props = Omit<MachineryData, 'image'> & {};

export const MachineCharacteristicsTable = ({title, characteristics, id}: props) => {


    return (
        <S_MachineryCardTable>
            <S_MachineryCardTitle>
                {title}
            </S_MachineryCardTitle>

            <thead>
            <tr>
                <th>Наименование</th>
                <th>Характеристика</th>
            </tr>
            </thead>

            <tbody>
            {characteristics.map((characteristic, index) => (
                <tr key = {`${id}-${index}`}>
                    <td>{characteristic.title}</td>
                    <td>{characteristic.value}</td>
                </tr>))}
            </tbody>
        </S_MachineryCardTable>
    );
}

export const S_MachineryCardTitle = styled.caption <{}>`
  position: relative;
  z-index: 10;
  text-align: center;
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  font-size: ${({theme}) => theme.fonts.size.h3};
  margin: 2rem;
`;

export const S_MachineryCardTable = styled.table<{}>`
  position: relative;
  z-index: 10;
  margin: auto;
  overflow-x: auto;
  //width: 100%;
  border-collapse: collapse;

  th, td {
    border-bottom: 1px solid #ddd;
    padding-block: ${getResponsiveSize(BASE / 3, BASE / 2, 320)};
    padding-inline: ${getResponsiveSize(BASE * 0.75, BASE * 2, 320)};
  }

  tr {
    ${plainTransition()}
  }

  tr:hover {
    background-color: ${({theme}) => theme.colors.white_smoke};
  }
`;


