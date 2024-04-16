// import original module declarations
import 'styled-components';
import {getResponsiveSize} from '../common/utils/getResponsiveSize';


// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secondary: string,
            bg_dark: string,
            bg_light: string,

            font_dark: string,
            font_medium: string,
            font_light: string,


        },

        fonts: {
            family: {
                base: string,
                accent: string,
            },
            weight: { regular: number, medium: number,bold: number,},
            size: {
                base:string,
                h1: string,
                h2: string,
                h3: string,
                p: string,
            },
        },

        duration: {
            long: string,
            middle: string,
            short: string,
        },

        order: {
            header: number,
            modal: number,
        },
    }
}