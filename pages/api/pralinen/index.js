import dbConnect from "../../../db/connect";
import Praline from "../../../db/model/Praline";

export default async function handler(request, response) {
  console.log("request", request);
  await dbConnect();

  if (request.method === "GET") {
    const pralinen = await Praline.find();
    return response.status(200).json(pralinen);
  }
}
