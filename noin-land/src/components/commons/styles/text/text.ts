import { colors } from "commons/constants/colors";
import styled from "styled-components";

const LogoText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: ${colors.main10};
`;

const H0 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const H1 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const H2 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const H3 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const H4 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const P1 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const P2 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const P3 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

const P4 = styled.span<{ color?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: ${(props) => (props.color ? props.color : colors.black5)};
`;

export const StyledText = { LogoText, H0, H1, H2, H3, H4, P1, P2, P3, P4 };
