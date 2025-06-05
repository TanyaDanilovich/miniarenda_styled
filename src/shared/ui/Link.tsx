import styled from "styled-components";
import {PropsWithChildren} from '../types/common.types';



type props = {
    to: string;
    //callback: () => void;
};
export const Link = ({to, children}: PropsWithChildren<props>) => {
    return (
        <S_Link href={to}>
            {children}
        </S_Link>
    );
};

export const S_Link = styled.a<{  }>`




`;
