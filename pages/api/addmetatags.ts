// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  arr: Array<string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const originalArr = req.body.arr;
  originalArr.splice(1, 0, req.body.metatags);
  originalArr.splice(2, 0, "<style>");
  const newArr = originalArr.join("");
  res.status(200).json(newArr);
}
