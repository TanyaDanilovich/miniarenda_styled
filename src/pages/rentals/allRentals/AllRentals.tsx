import styled from "styled-components";
import {S_Container} from '../../../shared/styled/S_Container';
import React from 'react';
import {sectionMargin} from '../../../app/styles/mixins';

import {MAIN_DATA} from '../../../shared/constants/MAIN_DATA';


type rentalKeysType = keyof typeof MAIN_DATA.categories.rental.items;

type props = {};

export const AllRentals = ({}: props) => {

    const rentalCategories = Object.keys(MAIN_DATA.categories.rental.items);
    return (
        <S_AllRentals>
            <S_Container>
                {rentalCategories.map((category, index) => {
                    console.log(MAIN_DATA.categories.rental.items[category as rentalKeysType])
                    return <div>{index}</div>
                })}
            </S_Container>
        </S_AllRentals>);
};


export const S_AllRentals = styled.div<{}>`
  ${sectionMargin};

`



