import { ILotto } from "commons/types/lotto";
import { useEffect, useState } from "react";

export default function LottoContainer() {
  const [lottoData, setLottoData] = useState<ILotto>();
  useEffect(() => {
    getLottoData();
  }, []);
  const getLottoData = async () => {
    await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=861"
    )
      .then((res) => res.json())
      .then((data) => setLottoData(data));
  };
  return <>{lottoData?.drwtNo1}</>;
}
