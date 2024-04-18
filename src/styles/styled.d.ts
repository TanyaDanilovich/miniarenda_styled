import 'styled-components';
import {theme} from './Theme.styled';


type CustomTheme = typeof theme;




declare module "styled-components" {
    export interface MyDefaultTheme extends CustomTheme {}
}