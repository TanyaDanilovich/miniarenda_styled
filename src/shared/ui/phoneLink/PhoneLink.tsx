
import styled from 'styled-components';
import {S_Flex} from '../../styled/S_Flex';
import FontAwesomeIcon from '../icon/FontAwesomeIcon';


type props = {};
export const PhoneLink = ({}: props) => {

    return (
        <S_PhoneLink $align = {"center"} $gap = {"1rem"}>
            <FontAwesomeIcon icon = {'icon-phone'} size = {'1x'}/>
            <a href = "tel:+375296949698">+375 (29) 694-96-98</a>
        </S_PhoneLink>);
};


export const S_PhoneLink = styled(S_Flex)<{}>`
`