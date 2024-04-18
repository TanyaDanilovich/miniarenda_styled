import styled from "styled-components";
import {Logo} from '../../shared/Logo';
import {Navigation} from '../navigation/Navigation';
import {HeaderTop} from './HeaderTop';

type props = {};
export const Header = ({}: props) => {
    return (


        <StyledHeader id = "header" className = "">
            {/*<div>*/}
            {/*    <div id = "header-content" className = "flex">*/}

            <Logo/>
            <Navigation/>
            <HeaderTop/>

            {/*        <div id = "header-right-container" className = "w-3/4 flex flex-col">*/}




            {/*            <div id = "navigation-container" className = "flex">*/}


            {/*                <div id = "navigation-phone"*/}
            {/*                     className = "flex w-1/3 bg-primary-medium-color text-white justify-center relative">*/}
            {/*


            {/*                    <div className = "m-auto relative ">*/}

            {/*                        <p>Звоните для заказа техники</p>*/}
            {/*                        <p>+375 29 694-96-98</p>*/}
            {/*                        <a class = "link-absolute" href = "tel:+375296949698"></a>*/}

            {/*                    </div>*/}
            {/*                </div>*/}


            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{}>`
  background-color: ${props => props.theme.colors.bg_primary};
`;


