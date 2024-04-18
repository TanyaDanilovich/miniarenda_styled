import {BREAKPOINTS} from "../common/constants";
import {getResponsiveSize} from "../common/utils/getResponsiveSize";
import {MyDefaultTheme} from 'styled-components';


export const theme: MyDefaultTheme = {
    colors: {

        primary: "#f68800",
        secondary: "#cd7100",
        bg_primary: "#030e27",
        white: "#ffffff",
        white_smoke: "#f5f5f5",
        gainsboro: "#e9ecef",
        lightGray: "#D3D3D3",
        silver: "#C0C0C0",
        gray: "#A9A9A9",
        dimGray: "#808080",
        darkGray: "#696969",
        lightSlateGray: "#778899",
        slateGray: "#708090",
        darkSlateGray: "#657674",
        dark: "#363f3e",
        black: "#000000"

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
