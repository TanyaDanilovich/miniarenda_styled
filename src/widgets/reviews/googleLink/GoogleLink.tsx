import React, {useId} from 'react';
import {S_GoogleLink} from './S_GoogleLink';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTheme} from 'styled-components';
import {faStar} from '@fortawesome/free-solid-svg-icons';


type props = {};
export const GoogleLink = ({}: props) => {
    const theme = useTheme()
    const id = useId()
    return (
        <S_GoogleLink>

            <a target={"_blank"} href = "https://www.google.com/search?sxsrf=ALiCzsaguRwNcxHy3qzy_2YFl1Wgc12Hog%3A1654264566906&q=%D0%90%D1%80%D0%B5%D0%BD%D0%B4%D0%B0%20%D0%BC%D0%B8%D0%BD%D0%B8-%D1%8D%D0%BA%D1%81%D0%BA%D0%B0%D0%B2%D0%B0%D1%82%D0%BE%D1%80%D0%B0%2C%20%D0%BC%D0%B8%D0%BD%D0%B8-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%B0%20%7C%20%D0%AF%D0%BC%D0%BE%D0%B1%D1%83%D1%80%20(%D0%B1%D1%83%D1%80)%20%7C%20%D0%93%D0%B8%D0%B4%D1%80%D0%BE%D0%BC%D0%BE%D0%BB%D0%BE%D1%82%20%7C%20%D0%91%D1%83%D1%80%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D0%B2%D0%B0%D0%B9&stick=H4sIAAAAAAAAAEWNSwrCQBBEcaF4jEEQFBTyj_E2DiFnyMJFTBZZCYqewAs4aoJj1PEK1TeyExeuuql61BsORmMr9YJYxtJxw2Bh-X4kl1YqfSdx7dBLgkTaqyg89Y897ChDjTcqKIEXNL96Tls0tEEDhSsU5TBMqdkfwAcGN8qowJ1KDhkVa4EzEwYXKigTk9-dtvmBkYo3TNc_eS9v430LdHqNWrCRbXh8AXfv7w3BAAAA&ved=2ahUKEwimyv_et5H4AhXlkYsKHWlCAC0QrMcEegQIAhAH#lrd=0x46dbdb237680559b:0xb52f3174f6fb1a97,1,,,">
                <span>Отлично</span>
                <span>
                    {[...Array(5)].map((undefined, index) => <FontAwesomeIcon key = {`${id}-${index}`} icon = {faStar}
                                                                              size = {'2x'}
                                                                              color = {theme.colors.primary}/>)}

                </span>
                <span>на основании 14 отзывов</span>
                <span></span>

            </a>

        </S_GoogleLink>);
};


