import { StyledPadding } from "components/commons/styles/padding";
import { StyledText } from "components/commons/styles/text/text";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

export default function ColorPickerContainer() {
  // Block Num : Math.pow(Math.round((STAGE + 0.5) / 2) + 1, 2)
  // TIME for each STAGE : 15sec
  // SCORE : Math.pow(STAGE, 3) * LEFT TIME
  // WORNG ANSWER : LEFT TIME - 3sec

  return (
    <Wrap>
      <ContentHeader>
        <StyledText.P2>STAGE : ###</StyledText.P2>
        <StyledText.P2>TIME LEFT : ###sec</StyledText.P2>
        <StyledText.P2>SCORE : ###</StyledText.P2>
      </ContentHeader>
      <StyledPadding height={10} />
      <ContentWrap></ContentWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;
const ContentHeader = styled.div`
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const ContentWrap = styled.div`
  width: 360px;
  height: 360px;
  margin: auto;
  border: 1px solid green;
`;
