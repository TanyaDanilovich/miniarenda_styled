import {S_Container} from '../../shared/styled/S_Container';
import {SubcategoriesCard} from '../subcategoriesCard/SubcategoriesCard';
import React from 'react';
import styled from 'styled-components';
import {SubcategoryItemData} from '../../shared/types/common.types';
import {useLocation} from 'react-router-dom';
import {cleanPathFromLocation} from '../../shared/utils/cleanPathFromLocation';

type props = { data: SubcategoryItemData<'rental'>[] };
export const MappedSubcategoriesCards = ({data}: props) => {

    const location = useLocation();

    return (
        <S_MappedSubcategoriesCards>

            {data.map((subcategory, index) => {
                const isActive = subcategory.url === cleanPathFromLocation(location.pathname)
                return <SubcategoriesCard key = {index} {...subcategory} isActive = {isActive}/>
            })}


        </S_MappedSubcategoriesCards>);
};

export const S_MappedSubcategoriesCards = styled(S_Container)`
  padding: 0;
  @media ${({theme}) => theme.media.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, calc(33.33% - 0.66rem));
    column-gap: 1.5rem;
  }


`;