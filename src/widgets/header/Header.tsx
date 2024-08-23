import styled, {useTheme} from "styled-components";
import {Logo} from '../../shared/styled/Logo';
import {HeaderTop} from './HeaderTop';
import {createRef, useEffect, useState} from 'react';
import {S_Flex} from '../../shared/styled/S_Flex';
import {DesktopNavigation} from '../../shared/ui/navigation/desktop/DesktopNavigation';
import {S_Container} from '../../shared/styled/S_Container';
import {MobileNavigation} from '../../shared/ui/navigation/mobile/MobileNavigation';
import {debounceFunction} from '../../shared/utils/debounceFunction';


type props = {};


export const Header = ({}: props) => {
    const theme = useTheme();

    const [isMobileNavigation, setMobileNavigation] = useState<boolean>(
        () => window.innerWidth <= parseInt(theme.breakpoints.tablet)
    );

    const headerRef = createRef<HTMLElement>()

    useEffect(() => {
        const choiceNavigation = () => {
            if (headerRef.current) {
                if (window.innerWidth <= parseInt(theme.breakpoints.tablet)) {
                    setMobileNavigation(true); // mobile
                } else {
                    setMobileNavigation(false); // desktop
                }
            }
        }
        const debounce = debounceFunction(choiceNavigation, 250);
        window.addEventListener("resize", debounce);

        return () => window.removeEventListener("resize", debounce);
    }, [headerRef]);

    return (


        <StyledHeader ref = {headerRef}>
            <S_Container>

                <Logo/>
                <S_Flex $direction = {"row"} $align = {"center"} $justify = {"space-between"} $grow = {"1"}>
                    <HeaderTop/>
                    {isMobileNavigation ? <MobileNavigation/> : <DesktopNavigation/>}
                </S_Flex>
            </S_Container>

        </StyledHeader>


    );
};

export const StyledHeader = styled.header<{}>`
  background-color: ${({theme}) => theme.colors.bg_primary};
  padding-block: 0.5rem;
  padding-inline: 1rem;
  position: sticky;
  z-index: ${({theme}) => theme.zIndices.header};
  top: 0;
  left: 0;
  width: 100%;


  display: flex;


  @media ${({theme}) => theme.media.tablet} {
    padding: 0;
    ${S_Container} > ${S_Flex} {
      flex-direction: column;
    }

  }

  ${S_Container} {

    display: flex;
    padding-inline: 0;

    @media ${({theme}) => theme.media.desktop} {
      max-width: min(calc(100vw - 6rem), 1500px);
    }
  }

`;

