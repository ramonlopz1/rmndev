import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";


export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/imgs/myprojects");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage }).single("projectimg");

  upload(req, res, (err) => {
    if (err) {
      console.log(err)
      return res.end("Bad request!");
    }
    console.log("ok")
    res.send("Success upload!");
  });
}
