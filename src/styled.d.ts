import 'styled-components';
import {theme} from './app/styles/Theme.styled';


type CustomTheme = typeof theme;


declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {
    }
}