// import styled from "styled-components";
// import { Container } from "../../components/styled/Container";
// import { FlexWrapper } from "../../components/styled/FlexWrapper";
// import { Logo } from "../../components/Logo";
// import { myTheme } from "../../styles/MyTheme.styled";
// import { HeaderDesktopMenu } from "./HeaderDesktopMenu";
// import { HeaderMobileMenu } from "./HeaderMobileMenu";
// import { BurgerButton } from "../../components/BurgerButton";
// import { useState } from "react";
// import { border } from "../../styles/mixins";
//
// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//
//   const isOpenToggler = () => setIsOpen((prev) => !prev);
//
//   return (
//     // <StyledHeader>
//     <StyledOuterHeader>
//       <StyledInnerHeader>
//         <Container>
//           <FlexWrapper justify={"space-between"} grow={"1"} align={"center"}>
//             <HeaderPanel>
//               <BurgerButton isOpen={isOpen} callback={isOpenToggler} />
//               <Logo />
//             </HeaderPanel>
//             {/*<FlexWrapper align={"center"} gap={"5rem"}>*/}
//
//             <HeaderDesktopMenu />
//             <HeaderMobileMenu isOpen={isOpen} />
//
//             {/*<FlexWrapper gap={"20px"} align={"center"}>*/}
//             {/*  <LanguageSwitcher />*/}
//             {/*  <ThemeSwitcher />*/}
//             {/*</FlexWrapper>*/}
//             {/*</FlexWrapper>*/}
//           </FlexWrapper>
//         </Container>
//       </StyledInnerHeader>
//     </StyledOuterHeader>
//     // </StyledHeader>
//   );
// };
//
// const StyledOuterHeader = styled.header<{}>`
//   @media ${myTheme.media.tablet} {
//     height: 60px;
//     top: -1px;
//   }
//
//   background-color: ${myTheme.colors.lightBg};
//   font-size: 20px;
//   height: 140px;
//   position: sticky;
//   top: -80px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 9999;
//   // ${border()};
// `;
//
// const StyledInnerHeader = styled.div<{}>`
//   height: 50px;
//   position: sticky;
//   top: 0;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
//
// const HeaderPanel = styled.div<{}>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media ${myTheme.media.tablet} {
//     flex-grow: 1;
//   }
// `;
