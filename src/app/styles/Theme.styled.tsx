import { BREAKPOINTS } from "../../shared/constants/BREAKPOINTS";
import {BASE} from "../../shared/constants/constants";
import {getResponsiveSize} from "../../shared/utils/getResponsiveSize";
import {MyDefaultTheme} from 'styled-components';


export const theme: MyDefaultTheme = {
    typography: {
        lineHeight: "1.2"
    },
    fonts: {
        family: {
            base: "Poppins",
            accent: "Roboto",
        },
        weight: {
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700
        },
        size: {

            base: `${BASE}px`,
            h1: getResponsiveSize(20, 45, 320, 768),
            h2: "2rem",
            h3: getResponsiveSize(22, 22),
            h4: getResponsiveSize(20, 35),
            h5: getResponsiveSize(20, 25),
            p: getResponsiveSize(16.875, 20),
        },
    },

    breakpoints: BREAKPOINTS,

    media: {
        smallMobile: `screen and (min-width:${BREAKPOINTS.smallMobile})`,
        mobile: `screen and (min-width:${BREAKPOINTS.mobile})`,
        tablet: `screen and (min-width:${BREAKPOINTS.tablet})`,
        computer: `screen and (min-width:${BREAKPOINTS.computer})`,
        desktop: `screen and (min-width:${BREAKPOINTS.desktop})`,
        widescreen: `screen and (min-width:${BREAKPOINTS.widescreen})`,
        extraWidescreen: `screen and (min-width:${BREAKPOINTS.extraWidescreen})`,
    },

    duration: {
        long: "1s",
        middle: "0.5s",
        short: "0.25s",
    },

    zIndices: {
        modal: 1000,
        tooltip: 1100,
        dropdown: 1200,
        header: 900,
        footer: 100,
        mainContent: 800,
    },
    shadow: {full: "0 0 10px 5px rgba(0, 0, 0, 0.1)"},
    colors: {

        primary: "#fd5d14",
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
        black: "#030e27",


        red: {
            b50: "#ffebee",
            b100: "#ffcdd2",
            b200: "#ef9a9a",
            b300: "#e57373",
            b400: "#ef5350",
            b500: "#f44336",
            b600: "#e53935",
            b700: "#d32f2f",
            b800: "#c62828",
            b900: "#b71c1c",
            ab100: "#ff8a80",
            ab200: "#ff5252",
            ab400: "#ff1744",
            ab700: "#d50000"
        },
        pink: {
            b50: "#fce4ec",
            b100: "#f8bbd0",
            b200: "#f48fb1",
            b300: "#f06292",
            b400: "#ec407a",
            b500: "#e91e63",
            b600: "#d81b60",
            b700: "#c2185b",
            b800: "#ad1457",
            b900: "#880e4f",
            ab100: "#ff80ab",
            ab200: "#ff4081",
            ab400: "#f50057",
            ab700: "#c51162"
        },
        purple: {
            b50: "#f3e5f5",
            b100: "#e1bee7",
            b200: "#ce93d8",
            b300: "#ba68c8",
            b400: "#ab47bc",
            b500: "#9c27b0",
            b600: "#8e24aa",
            b700: "#7b1fa2",
            b800: "#6a1b9a",
            b900: "#4a148c",
            ab100: "#ea80fc",
            ab200: "#e040fb",
            ab400: "#d500f9",
            ab700: "#aa00ff"
        },
        deeppurple: {
            b50: "#ede7f6",
            b100: "#d1c4e9",
            b200: "#b39ddb",
            b300: "#9575cd",
            b400: "#7e57c2",
            b500: "#673ab7",
            b600: "#5e35b1",
            b700: "#512da8",
            b800: "#4527a0",
            b900: "#311b92",
            ab100: "#b388ff",
            ab200: "#7c4dff",
            ab400: "#651fff",
            ab700: "#6200ea"
        },
        indigo: {
            b50: "#e8eaf6",
            b100: "#c5cae9",
            b200: "#9fa8da",
            b300: "#7986cb",
            b400: "#5c6bc0",
            b500: "#3f51b5",
            b600: "#3949ab",
            b700: "#303f9f",
            b800: "#283593",
            b900: "#1a237e",
            ab100: "#8c9eff",
            ab200: "#536dfe",
            ab400: "#3d5afe",
            ab700: "#304ffe"
        },
        blue: {
            b50: "#e3f2fd",
            b100: "#bbdefb",
            b200: "#90caf9",
            b300: "#64b5f6",
            b400: "#42a5f5",
            b500: "#2196f3",
            b600: "#1e88e5",
            b700: "#1976d2",
            b800: "#1565c0",
            b900: "#0d47a1",
            ab100: "#82b1ff",
            ab200: "#448aff",
            ab400: "#2979ff",
            ab700: "#2962ff"
        },
        lightblue: {
            b50: "#e1f5fe",
            b100: "#b3e5fc",
            b200: "#81d4fa",
            b300: "#4fc3f7",
            b400: "#29b6f6",
            b500: "#03a9f4",
            b600: "#039be5",
            b700: "#0288d1",
            b800: "#0277bd",
            b900: "#01579b",
            ab100: "#80d8ff",
            ab200: "#40c4ff",
            ab400: "#00b0ff",
            ab700: "#0091ea"
        },
        cyan: {
            b50: "#e0f7fa",
            b100: "#b2ebf2",
            b200: "#80deea",
            b300: "#4dd0e1",
            b400: "#26c6da",
            b500: "#00bcd4",
            b600: "#00acc1",
            b700: "#0097a7",
            b800: "#00838f",
            b900: "#006064",
            ab100: "#84ffff",
            ab200: "#18ffff",
            ab400: "#00e5ff",
            ab700: "#00b8d4"
        },
        teal: {
            b50: "#e0f2f1",
            b100: "#b2dfdb",
            b200: "#80cbc4",
            b300: "#4db6ac",
            b400: "#26a69a",
            b500: "#009688",
            b600: "#00897b",
            b700: "#00796b",
            b800: "#00695c",
            b900: "#004d40",
            ab100: "#a7ffeb",
            ab200: "#64ffda",
            ab400: "#1de9b6",
            ab700: "#00bfa5"
        },
        green: {
            b50: "#e8f5e9",
            b100: "#c8e6c9",
            b200: "#a5d6a7",
            b300: "#81c784",
            b400: "#66bb6a",
            b500: "#4caf50",
            b600: "#43a047",
            b700: "#388e3c",
            b800: "#2e7d32",
            b900: "#1b5e20",
            ab100: "#b9f6ca",
            ab200: "#69f0ae",
            ab400: "#00e676",
            ab700: "#00c853"
        },
        lightgreen: {
            b50: "#f1f8e9",
            b100: "#dcedc8",
            b200: "#c5e1a5",
            b300: "#aed581",
            b400: "#9ccc65",
            b500: "#8bc34a",
            b600: "#7cb342",
            b700: "#689f38",
            b800: "#558b2f",
            b900: "#33691e",
            ab100: "#ccff90",
            ab200: "#b2ff59",
            ab400: "#76ff03",
            ab700: "#64dd17"
        },
        lime: {
            b50: "#f9fbe7",
            b100: "#f0f4c3",
            b200: "#e6ee9c",
            b300: "#dce775",
            b400: "#d4e157",
            b500: "#cddc39",
            b600: "#c0ca33",
            b700: "#afb42b",
            b800: "#9e9d24",
            b900: "#827717",
            ab100: "#f4ff81",
            ab200: "#eeff41",
            ab400: "#c6ff00",
            ab700: "#aeea00"
        },
        yellow: {
            b50: "#fffde7",
            b100: "#fff9c4",
            b200: "#fff59d",
            b300: "#fff176",
            b400: "#ffee58",
            b500: "#ffeb3b",
            b600: "#fdd835",
            b700: "#fbc02d",
            b800: "#f9a825",
            b900: "#f57f17",
            ab100: "#ffff8d",
            ab200: "#ffff00",
            ab400: "#ffea00",
            ab700: "#ffd600"
        },
        amber: {
            b50: "#fff8e1",
            b100: "#ffecb3",
            b200: "#ffe082",
            b300: "#ffd54f",
            b400: "#ffca28",
            b500: "#ffc107",
            b600: "#ffb300",
            b700: "#ffa000",
            b800: "#ff8f00",
            b900: "#ff6f00",
            ab100: "#ffe57f",
            ab200: "#ffd740",
            ab400: "#ffc400",
            ab700: "#ffab00"
        },
        orange: {
            b50: "#fff3e0",
            b100: "#ffe0b2",
            b200: "#ffcc80",
            b300: "#ffb74d",
            b400: "#ffa726",
            b500: "#ff9800",
            b600: "#fb8c00",
            b700: "#f57c00",
            b800: "#ef6c00",
            b900: "#e65100",
            ab100: "#ffd180",
            ab200: "#ffab40",
            ab400: "#ff9100",
            ab700: "#ff6d00"
        },
        deeporange: {
            b50: "#fbe9e7",
            b100: "#ffccbc",
            b200: "#ffab91",
            b300: "#ff8a65",
            b400: "#ff7043",
            b500: "#ff5722",
            b600: "#f4511e",
            b700: "#e64a19",
            b800: "#d84315",
            b900: "#bf360c",
            ab100: "#ff9e80",
            ab200: "#ff6e40",
            ab400: "#ff3d00",
            ab700: "#dd2c00"
        },
        brown: {
            b50: "#efebe9",
            b100: "#d7ccc8",
            b200: "#bcaaa4",
            b300: "#a1887f",
            b400: "#8d6e63",
            b500: "#795548",
            b600: "#6d4c41",
            b700: "#5d4037",
            b800: "#4e342e",
            b900: "#3e2723"
        },
        grey: {
            b50: "#fafafa",
            b100: "#f5f5f5",
            b200: "#eeeeee",
            b300: "#e0e0e0",
            b400: "#bdbdbd",
            b500: "#9e9e9e",
            b600: "#757575",
            b700: "#616161",
            b800: "#424242",
            b900: "#212121"
        },
        bluegrey: {
            b50: "#eceff1",
            b100: "#cfd8dc",
            b200: "#b0bec5",
            b300: "#90a4ae",
            b400: "#78909c",
            b500: "#607d8b",
            b600: "#546e7a",
            b700: "#455a64",
            b800: "#37474f",
            b900: "#263238"

        }


    },

};
