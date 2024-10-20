import styled from 'styled-components';
import React, {useId} from 'react';
import {MachineCharacteristicsTable} from '../../features/machineCharacteristicsTable/MachineCharacteristicsTable';
import {MachineryData} from '../../shared/types/common.types';
import {S_Flex} from '../../shared/styled/S_Flex';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import {S_Image} from '../../shared/styled/S_Image';
import {S_InnerContainer} from '../../shared/styled/S_InnerContainer';
import {MachinePriceTable} from '../../features/machinePriceTable/MachinePriceTable';
import {S_OrderModal} from '../orderModal/S_OrderModal';
import {S_LinkAsButton} from '../../shared/ui/buttons/S_LinkAsButton';
import {OrderedButton} from '../../shared/ui/buttons/OrderedButton';
import {ReadMoreButton} from '../../shared/ui/buttons/ReadMoreButton';
import {S_ReadMoreButton} from '../../shared/ui/buttons/S_ReadMoreButton';


type props = MachineryData & {}
export const ExcavatorRentalCard = ({
                                        id, characteristics,
                                        priceCharacteristics,
                                        tableTitle,
                                        image,
                                        ...rest
                                    }: props) => {
    const tableID = useId();

    return (
        <S_ExcavatorRentalCard as = {'article'} $wrap = {"wrap"} $justify = {"center"}>


            {/*<h4>{tableTitle}</h4>*/}


            {image && <S_ImageContainer $width = {"100%"} style = {{}}>
                <S_Image src = {image.src} alt = {image.alt}/>
            </S_ImageContainer>}
            <OrderedButton/>

            {characteristics && <MachineCharacteristicsTable id = {id}
                                                             title = {tableTitle}
                                                             characteristics = {characteristics}
            />}


            {/*{priceCharacteristics && <MachinePriceTable id = {`${tableID}-${id}`}*/}
            {/*    // title = {'Цена услуг мини-экскаватора'}*/}
            {/*                                            priceCharacteristics = {priceCharacteristics}*/}
            {/*/>}*/}
            <ReadMoreButton/>


        </S_ExcavatorRentalCard>
    );
};

export const S_ExcavatorRentalCard = styled(S_Flex) <{}>`

  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &:last-child {
    margin-bottom: 3rem;
  }

  @media ${({theme}) => theme.media.mobile} {

  }

  ${S_ReadMoreButton} {
    margin: 1.5rem;
  }

`;
