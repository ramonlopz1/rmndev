import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";

import path from "path";

export default async function handler(req, res) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./test");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

  const upload = multer({ storage }).single("projectimg");

  upload(req, res, (err) => {
    if (err) {
      return res.end("Bad request!");
    }

    res.send("Success upload!");
  });
}
