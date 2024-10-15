import React from 'react';
import {S_Table, S_TableTitle, S_Tr} from '../../shared/styled/S_Table';
import {Characteristic, MachineryData, MachineryPriceCharacteristicKeys} from '../../shared/types/common.types';
import styled from 'styled-components';

type props = Pick<MachineryData, 'id' | 'priceCharacteristics' | 'tableTitle'> & {};

export const MachinePriceTable = ({
                                      tableTitle = undefined,
                                      priceCharacteristics,
                                      id
                                  }: props) => {


    return (
        <S_MachinePriceTable>
            {tableTitle && <S_TableTitle>
                {tableTitle}
            </S_TableTitle>}

            {/*<thead>*/}
            {/*<tr>*/}
            {/*    <th>Наименование</th>*/}
            {/*    <th>Характеристика</th>*/}
            {/*</tr>*/}
            {/*</thead>*/}

            <tbody>
            {priceCharacteristics.map((characteristic, index) => (
                <S_Tr key = {`${id}-${index}`}>
                    <td>{characteristic.title}</td>
                    <td>{characteristic.value}</td>
                </S_Tr>))}
            </tbody>
        </S_MachinePriceTable>
    );
}

export const S_MachinePriceTable = styled(S_Table)`
  font-weight: 700;

`