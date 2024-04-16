import {BREAKPOINTS} from "../common/constants";
import {getResponsiveSize} from "../common/utils/getResponsiveSize";
import {DefaultTheme} from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        primary: "#f68800",
        secondary: "#cd7100",
        bg_dark: "#363f3e",
        bg_light: "#f5f5f5",

        font_dark: "#363f3e",
        font_medium: "#535372",
        font_light: "#fff",
    },

    fonts: {
        family: {
            base: "Poppins",
            accent: "Roboto",
        },
        weight: {
            regular: 400,
            medium: 500,
            bold: 700
        },
        size: {
            base: "16px",
            h1: getResponsiveSize(20, 65, 700, 1200,),
            h2: getResponsiveSize(28.125, 22),
            h3: getResponsiveSize(30, 70),
            p: getResponsiveSize(16.875, 20),
        },
    },

    breakpoints: BREAKPOINTS,

    media: {
        smallMobile: `screen and (max-width:${BREAKPOINTS.smallMobile})`,
        mobile: `screen and (max-width:${BREAKPOINTS.mobile})`,
        tablet: `screen and (max-width:${BREAKPOINTS.tablet})`,
        computer: `screen and (max-width:${BREAKPOINTS.computer})`,
        desktop: `screen and (max-width:${BREAKPOINTS.desktop})`,
        widescreen: `screen and (max-width:${BREAKPOINTS.widescreen})`,
        extraWidescreen: `screen and (max-width:${BREAKPOINTS.extraWidescreen})`,
    },

    // padding: {
    //   section: "clamp(50px, 10dvh, 100px)",
    //   sectionTitle: {
    //     left: SECTION_TITLE_PADDING.left,
    //     beforeWidth: SECTION_TITLE_PADDING.beforeWidth,
    //     beforeLeft: `calc(${SECTION_TITLE_PADDING.left} - ${SECTION_TITLE_PADDING.beforeWidth})`,
    //   },
    // },
    duration: {
        long: "1s",
        middle: "0.5s",
        short: "250ms",
    },

    order: {
        header: 50,
        modal: 100,
    },

};
