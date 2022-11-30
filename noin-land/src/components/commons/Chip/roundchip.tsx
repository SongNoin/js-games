import { colors } from "commons/constants/colors";
import styled from "styled-components";
import { H2Text } from "../styles/text/text";

interface Props {
  textColor?: string;
  backGroundColor?: string;
  text?: string | number;
}

export default function RoundChip({ textColor, backGroundColor, text }: Props) {
  return (
    <Wrap backGroundColor={backGroundColor}>
      <ChipText>{text}</ChipText>
    </Wrap>
  );
}
const Wrap = styled.div<{ textColor?: string; backGroundColor?: string }>`
  width: 60px;
  height: 60px;
  color: ${(props) => (props.textColor ? props.textColor : colors.main0)};
  background-color: ${(props) =>
    props.backGroundColor ? props.backGroundColor : colors.main4};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChipText = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  text-shadow: rgb(0 0 0) 0 0 2px;
`;
