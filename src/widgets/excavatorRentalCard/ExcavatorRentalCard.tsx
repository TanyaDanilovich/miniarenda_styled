import styled from 'styled-components';
import React from 'react';
import {
    MachineCharacteristicsTable,
    S_MachineCharacteristicsTable
} from '../../features/machineCharacteristicsTable/MachineCharacteristicsTable';
import {MachineryData} from '../../shared/types/common.types';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import {S_Image} from '../../shared/styled/S_Image';
import {OrderedButton, S_OrderedButton} from '../../shared/ui/buttons/OrderedButton';
import {ReadMoreButton} from '../../shared/ui/buttons/ReadMoreButton';
import {S_ReadMoreButton} from '../../shared/ui/buttons/S_ReadMoreButton';
import {outlinedNestedEverything} from '../../app/styles/mixins';
import {BREAKPOINTS} from '../../shared/constants/BREAKPOINTS';
import {S_InnerContainer} from '../../shared/styled/S_InnerContainer';


type props = MachineryData & {}
export const ExcavatorRentalCard = ({
                                        id, characteristics,
                                        priceCharacteristics,
                                        tableTitle,
                                        image,
                                        ...rest
                                    }: props) => {

    return (
        <S_ExcavatorRentalCard as = {'article'}>


            {/*<h4>{tableTitle}</h4>*/}


            {image && <S_ImageContainer $width = {"100%"} style = {{}} $background = {"transparent"}>
                <S_Image src = {image.src} alt = {image.alt}/>
            </S_ImageContainer>}

            {/*<S_Flex $direction = {'column'} $justify = {"center"}>*/}
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
            {/*</S_Flex>*/}

        </S_ExcavatorRentalCard>
    );
};

export const S_ExcavatorRentalCard = styled(S_InnerContainer) <{}>`
    //${outlinedNestedEverything};
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  max-width: ${BREAKPOINTS.tablet};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-bottom: 4rem;
  }


  ${S_ReadMoreButton} {
    margin: 1.5rem;
  }

  text-align: center;

  & > table {
    text-align: left;
  }


  @media ${({theme}) => theme.media.tablet} {
    display: grid;
    ${S_ImageContainer} {
      grid-area: image;
      padding: 1rem;
    }

    ${S_OrderedButton} {
      grid-area: orderedButton;
      margin: 1rem;
    }

    ${S_MachineCharacteristicsTable} {
      grid-area: table;
    }

    ${S_ReadMoreButton} {
      grid-area: readMoreButton;
    }

    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
    ". table"
    "image table"
    "image table"
    ". table"
    "readMoreButton orderedButton";
    gap: 1rem;

  }
`;
