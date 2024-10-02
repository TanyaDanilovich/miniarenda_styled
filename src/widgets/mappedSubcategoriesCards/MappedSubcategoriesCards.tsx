import {API} from '../../app/api/API';
import {S_Container} from '../../shared/styled/S_Container';
import {SubcategoriesCard} from '../subcategoriesCard/SubcategoriesCard';
import React from 'react';
import styled from 'styled-components';

type props = {};
export const MappedSubcategoriesCards = ({}: props) => {

    const rentalSubcategories = API.getRentalSubcategoriesData()

    return (
        <S_MappedSubcategoriesCards>

            {rentalSubcategories.map((subcategory, index) => (
                <SubcategoriesCard key = {index} {...subcategory}/>
            ))}


        </S_MappedSubcategoriesCards>);
};

export const S_MappedSubcategoriesCards = styled(S_Container)``;