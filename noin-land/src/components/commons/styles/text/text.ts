import { colors } from "commons/constants/colors";
import styled from "styled-components";

export const LogoText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: ${colors.main10};
`;

export const H0Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const H1Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const H2Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const H3Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const H4Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const P1Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const P2Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const P3Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const P4Text = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;
