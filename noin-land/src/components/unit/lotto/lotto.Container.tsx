import axios from "axios";
import { colors } from "commons/constants/colors";
import { ILotto } from "commons/types/lotto";
import RoundChip from "components/commons/chips/RoundChip";
import { StyledPadding } from "components/commons/styles/padding";
import { StyledText } from "components/commons/styles/text/text";
import { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function LottoContainer() {
  const [lottoData, setLottoData] = useState<ILotto>();
  const [drwNo, setDrwNo] = useState(1048);
  useEffect(() => {
    getLottoData();
  }, [drwNo]);

  const getLottoData = async () => {
    const response = await fetch(`/api/lotto/${drwNo}`);
    const lotto = await response.json();
    setLottoData(lotto);
  };
  function onChangeSelectDrwNo(e: ChangeEvent<HTMLSelectElement>) {
    setDrwNo(Number(e.target.value));
  }
  return (
    <Wrap>
      <LottoNumWrap>
        <SelectBoxWrap>
          <SelectBox onChange={onChangeSelectDrwNo}>
            <option>1048</option>
            <option>1047</option>
            <option>1046</option>
            <option>1045</option>
            <option>1044</option>
          </SelectBox>
        </SelectBoxWrap>
        <StyledText.H4>
          {" "}
          <StyledText.H3 color={colors.red5}>
            {lottoData?.drwNo}회
          </StyledText.H3>{" "}
          당첨결과
        </StyledText.H4>
        <StyledPadding height={60} />
        <ChipWrap>
          <RoundChip text={lottoData?.drwtNo1} />
          <RoundChip text={lottoData?.drwtNo2} />
          <RoundChip text={lottoData?.drwtNo3} />
          <RoundChip text={lottoData?.drwtNo4} />
          <RoundChip text={lottoData?.drwtNo5} />
          <RoundChip text={lottoData?.drwtNo6} />
          +
          <RoundChip text={lottoData?.bnusNo} />
        </ChipWrap>
      </LottoNumWrap>
      <StyledPadding height={30} />
      <LottoNumWrap>
        <StyledText.H4>로또번호 생성기</StyledText.H4>
      </LottoNumWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
const SelectBox = styled.select``;
const SelectBoxWrap = styled.div``;
const LottoNumWrap = styled.div`
  width: 800px;
  border: 1px solid #ddd;
  background: #fff;
  padding: 60px 60px 90px;
`;
const ChipWrap = styled.div`
  padding: 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
