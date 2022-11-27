import { colors } from "commons/constants/colors";
import styled from "styled-components";
import { H0Text, H4Text } from "components/commons/styles/text/text";

export default function Header() {
  return (
    <Wrap>
      <H0Text>노인랜드</H0Text>
      <MenuWrap>
        <H4Text>텍스트</H4Text>
        <H4Text>텍스트</H4Text>
        <H4Text>텍스트</H4Text>
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
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
