import axios from "axios";
import { createHash } from "node:crypto";
import { NextApiRequest, NextApiResponse } from "next";

// This should be api keys, but time didn't let me finish it.
const publicKey = "77989cd1b9b55360e5dad825e78d3f52";
const privateKey = "635de7065008cffc26c33dd559b8ab368220697a";

const handlerComicByName = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { name } = req.query;

  if (name !== "undefined") {
    const api =
      "https://gateway.marvel.com:443/v1/public/comics?title=" +
      name +
      "&limit=1";
    const timestamp = new Date().toISOString();
    const hash = createHash("md5")
      .update(timestamp + privateKey + publicKey)
      .digest("hex");
    // Again, URLParams must be here
    const apiUrl =
      api + "&ts=" + timestamp + "&apikey=" + publicKey + "&hash=" + hash;

    try {
      const data = await axios.get(apiUrl);
      const character = JSON.parse(
        JSON.stringify(data.data["data"].results[0]),
      );
      res.status(200).json(character);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  res.status(400).end();
};

export default handlerComicByName;
