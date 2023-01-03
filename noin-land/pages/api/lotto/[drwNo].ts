import { ILotto } from "commons/types/lotto";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILotto | undefined>
) {
  const { drwNo } = req.query;
  const lotto = lottoRequestInfo.find(
    (el) => String(el.drwNo) == String(drwNo)
  );
  res.status(200).json(lotto);
}

const lottoRequestInfo = [
  {
    totSellamnt: 117323901000,
    returnValue: "success",
    drwNoDate: "2022-12-31",
    firstWinamnt: 1612494508,
    drwtNo6: 39,
    drwtNo4: 21,
    firstPrzwnerCo: 17,
    drwtNo5: 32,
    bnusNo: 30,
    firstAccumamnt: 27412406636,
    drwNo: 1048,
    drwtNo2: 12,
    drwtNo3: 17,
    drwtNo1: 6,
  },
  {
    totSellamnt: 103058179000,
    returnValue: "success",
    drwNoDate: "2022-12-24",
    firstWinamnt: 2748797875,
    drwtNo6: 44,
    drwtNo4: 40,
    firstPrzwnerCo: 9,
    drwtNo5: 42,
    bnusNo: 32,
    firstAccumamnt: 24739180875,
    drwNo: 1047,
    drwtNo2: 20,
    drwtNo3: 33,
    drwtNo1: 2,
  },
  {
    totSellamnt: 100923993000,
    returnValue: "success",
    drwNoDate: "2022-12-17",
    firstWinamnt: 2011415719,
    drwtNo6: 36,
    drwtNo4: 29,
    firstPrzwnerCo: 12,
    drwtNo5: 35,
    bnusNo: 28,
    firstAccumamnt: 24136988628,
    drwNo: 1046,
    drwtNo2: 16,
    drwtNo3: 25,
    drwtNo1: 7,
  },
  {
    totSellamnt: 105380282000,
    returnValue: "success",
    drwNoDate: "2022-12-10",
    firstWinamnt: 1990060443,
    drwtNo6: 41,
    drwtNo4: 19,
    firstPrzwnerCo: 13,
    drwtNo5: 21,
    bnusNo: 37,
    firstAccumamnt: 25870785759,
    drwNo: 1045,
    drwtNo2: 14,
    drwtNo3: 15,
    drwtNo1: 6,
  },
  {
    totSellamnt: 102891973000,
    returnValue: "success",
    drwNoDate: "2022-12-03",
    firstWinamnt: 3136941235,
    drwtNo6: 36,
    drwtNo4: 26,
    firstPrzwnerCo: 8,
    drwtNo5: 28,
    bnusNo: 4,
    firstAccumamnt: 25095529880,
    drwNo: 1044,
    drwtNo2: 17,
    drwtNo3: 20,
    drwtNo1: 12,
  },
];
