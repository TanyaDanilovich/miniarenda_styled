import styled from "styled-components";
import iconSprite from "../../assets/svg/spriteWeather.svg";


type props = {
  id: string;
  height?: string;
  width?: string;
  viewBox?: string;
  sprite?: string;
  fill?:string
};
export const Icon = ({
  id,
  sprite = iconSprite,
  width = "20",
  height = "20",
  viewBox,
    fill
}: props) => {
  return (
    <StyledIcon
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}` || viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`${sprite}#${id}`} />
    </StyledIcon>
  );
};

type StyledIconProps = {
  fill?: string;
};
const StyledIcon = styled.svg<StyledIconProps>`
  fill: ${(props) => props.fill || props.theme.colors.primary};
`;
