import { useEffect } from "react";

export default function LottoPage() {
  useEffect(() => {
    getLottoData();
  }, []);
  const getLottoData = async () => {
    const res = await fetch(
      "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=861"
    );
    console.log(res);
  };

  return <>로또</>;
}
