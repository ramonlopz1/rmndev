import type { NextApiRequest, NextApiResponse } from "next";
import DB from "../../services/mongo-services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await DB.connect();
  console.info("Connected to MongoDB");

  if (req.method === "GET") {
    if (req.query.id) {
      try {
        const project = await DB.getOne(req.query.id);
        res.status(200).json(project);
      } catch (err) {
        console.error(err);
        res.status(500).send({
          error: "bad request",
        });
      }
    } else {
      try {
        const projects = await DB.getAll();
        res.status(200).json(projects);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "bad request",
        });
      }
    }
  } else if (req.method === "POST") {
    try {
      console.log(req.body);
      DB.post(req.body);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "bad request",
      });
    }
  } else if (req.method === "PUT") {
    try {
      DB.put(req.body, req.query.id);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "bad request",
      });
    }
  } else {
    res.status(504).send({
      error: "You're not authorized to use this method.",
    });
  }
}
