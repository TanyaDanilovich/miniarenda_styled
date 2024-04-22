import styled, {css} from "styled-components";

type Props = {
    $display?:string,
    $height?: string,

    $paddingLeft?: string,
    $paddingRight?: string,
    $paddingTop?: string,
    $paddingBottom?: string,

    $marginLeft?: string,
    $marginRight?: string,
    $marginTop?: string,
    $marginBottom?: string,

    $background?:string,
    $borderRadius?:string,

    $lineHeight?: string
};


export const StyledBox = styled.div<Props>`

  min-height: fit-content;
  height: ${({$height}) => $height || "100%"};

  ${({$display}) => $display && css`display: ${$display}`};

  ${({$paddingLeft}) => $paddingLeft && css`padding-left: ${$paddingLeft}`};
  ${({$paddingRight}) => $paddingRight && css`padding-right: ${$paddingRight}`};
  ${({$paddingTop}) => $paddingTop && css`padding-top: ${$paddingTop}`};
  ${({$paddingBottom}) => $paddingBottom && css`padding-bottom: ${$paddingBottom}`};

  ${({$marginLeft}) => $marginLeft && css`margin-left: ${$marginLeft}`};
  ${({$marginRight}) => $marginRight && css`margin-right: ${$marginRight}`};
  ${({$marginTop}) => $marginTop && css`margin-top: ${$marginTop}`};
  ${({$marginBottom}) => $marginBottom && css`margin-bottom: ${$marginBottom}`};

  ${({$background}) => $background && css`background: ${$background}`};
  ${({$borderRadius}) => $borderRadius && css`border-radius: ${$borderRadius}`};

  ${({$lineHeight}) => $lineHeight && css`line-height: ${$lineHeight}`};

`;
