import styled from 'styled-components';
import {S_ReadMoreButton} from './S_ReadMoreButton';
import {plainTransition} from '../../../app/styles/mixins';


type props = { url?: string, title?: string, onClick?: () => void };
export const ReadMoreButtonAsButton = ({
                                           title = "Подробнее", onClick = () => {
    }
                                       }: props) => {


    return (
        <S_ReadMoreButtonWithCircle as = "button" onClick = {onClick}>
            <span>&nbsp;{title}</span>
        </S_ReadMoreButtonWithCircle>);
};


export const S_ReadMoreButtonWithCircle = styled(S_ReadMoreButton)`
    display:inline-flex;
    align-items:center;
    min-width:165px;

    &::before{
        content:" ";
        display:inline-block;
        background-color:${({theme}) => theme.colors.white};
        border-radius:50%;
        width:25px;
        height:25px;
    }

    span::before{
        ${plainTransition()};
        content:" ";
        display:inline-block;
        position:absolute;
        top:10px;
        left:26px;
        background-color:${({theme}) => theme.colors.primary};
        width:21px;
        height:21px;
        mask-image:url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/></svg>');
    }

    &:hover{
        span::before{
            background-color:${({theme}) => theme.colors.bg_primary};
        }
    }

`

