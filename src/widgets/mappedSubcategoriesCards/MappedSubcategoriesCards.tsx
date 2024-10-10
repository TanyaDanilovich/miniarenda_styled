import {S_Container} from '../../shared/styled/S_Container';
import {SubcategoriesCard} from '../subcategoriesCard/SubcategoriesCard';
import React from 'react';
import styled from 'styled-components';
import {SubcategoryItemData} from '../../shared/types/common.types';

type props = {data: SubcategoryItemData<'rental'>[]};
export const MappedSubcategoriesCards = ({data}: props) => {



    return (
        <S_MappedSubcategoriesCards>

            {data.map((subcategory, index) => (
                <SubcategoriesCard key = {index} {...subcategory}/>
            ))}


        </S_MappedSubcategoriesCards>);
};

export const S_MappedSubcategoriesCards = styled(S_Container)`
  @media ${({theme}) => theme.media.tablet}{
    width: 100%;
    display: grid;
    grid-template-columns: calc(33.33% - 0.66rem) calc(33.33% - 0.66rem) calc(33.33% - 0.66rem);
    column-gap: 1.5rem;
  }
 

`;