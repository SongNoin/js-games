import { colors } from "commons/constants/colors";
import styled from "styled-components";
import { StyledPadding } from "components/commons/styles/padding";
import router from "next/router";
import { StyledText } from "components/commons/styles/text/text";

export default function Header() {
  return (
    <Wrap>
      <LogoWrap>
        <StyledText.LogoText style={{ cursor: "pointer" }}>
          NoinLand
        </StyledText.LogoText>
      </LogoWrap>
      <MenuWrap>
        <StyledText.H4
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/lotto")}
        >
          로또
        </StyledText.H4>
        <StyledText.H4 style={{ cursor: "pointer" }}>룰렛</StyledText.H4>
        <StyledText.H4
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/colorPicker")}
        >
          색깔 맞추기
        </StyledText.H4>
        <StyledText.H4 style={{ cursor: "pointer" }}>텍스트</StyledText.H4>
      </MenuWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 120px;
  background-color: ${colors.main05};
  border-bottom: 1px solid ${colors.main6};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 5%;
`;
const LogoWrap = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
`;
const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3 1;
  justify-content: space-evenly;
`;
