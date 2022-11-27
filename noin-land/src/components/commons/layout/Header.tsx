import { colors } from "commons/constants/colors";
import styled from "styled-components";
import { H0Text, H4Text, LogoText } from "components/commons/styles/text/text";
import { StyledPadding } from "components/commons/styles/padding";

export default function Header() {
  return (
    <Wrap>
      <LogoText>NoinLand</LogoText>
      <MenuWrap>
        <H4Text>로또</H4Text>
        <StyledPadding width={30} />
        <H4Text>텍스트</H4Text>
        <StyledPadding width={30} />
        <H4Text>텍스트</H4Text>
        <StyledPadding width={30} />
        <H4Text>텍스트</H4Text>
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
  padding: 10px 100px 0px 100px;
`;

const MenuWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
`;
