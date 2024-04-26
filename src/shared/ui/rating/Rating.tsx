import React, {useId} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTheme} from 'styled-components';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';


type props = { size: SizeProp };
export const Rating = ({size = '1x'}: props) => {
    const theme = useTheme()
    const id = useId()
    return (
        <span>
                    {[...Array(5)].map((undefined, index) => <FontAwesomeIcon key = {`${id}-${index}`} icon = {faStar}
                                                                              size = {size}
                                                                              color = {theme.colors.primary}/>)}

                </span>
    );
};


