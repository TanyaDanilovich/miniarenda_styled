import styled from "styled-components";
import checkmark from "../../../assets/icons/checkmark-circle-green.svg"
import {S_Flex} from '../../../shared/styled/S_Flex';


export const S_UserLetter = styled.div<{}>`

    border-radius:50%;
    background:${({theme}) => theme.colors.primary};
    color:${({theme}) => theme.colors.white};
    font-weight:${({theme}) => theme.fonts.weight.semiBold};
    font-size:1.25rem;
    line-height:3rem;
    width:3rem;
    text-align:center;
    position:relative;
    flex-shrink:0;

    
    &:after{
        position:absolute;
        content:url(${checkmark});
        line-height:20px;
        bottom:0;
        right:0;
        background:#fff;
        border-radius:50%;
        width:20px;
        height:20px;
    }
`

export const S_UserName = styled.div<{}>`
        //background-color: ${({theme}) => theme.colors.red.b100};
    //flex-grow: 1;
    font-size:${({theme}) => theme.fonts.size.p};
    font-weight:${({theme}) => theme.fonts.weight.semiBold};
    //text-align: center;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    width:calc(100%);
    max-width:100%;
`


export const S_ReviewCard = styled.div<{}>`
    padding:1rem;
    margin:4rem auto 0;
    // min-width:calc(100% - 20px);
    min-height:220px;
    background-color:${({theme}) => theme.colors.white};
    position:relative;
    z-index:50;
    box-shadow:${({theme}) => theme.shadow.full};
    flex:0 0 100%;

    &:last-child{
        margin-right:2rem;
    }

    @media ${({theme}) => theme.mediaMinWidth.largeMobile}{
        &:last-child{
            margin-right:1rem;
        }
    }

    & > ${S_Flex} > ${S_Flex}{
        flex:0 1 auto;
        max-width:100%;
        min-width:0;
    }

    @media ${({theme}) => theme.mediaMinWidth.largeMobile}{
        flex-basis:calc(50% - 1rem);
    }
    @media ${({theme}) => theme.mediaMinWidth.computer}{
        flex-basis:calc(30% + 1rem);
    }
`