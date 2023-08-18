import dbConnect from "../../../db/connect";
import Praline from "../../../db/model/Praline";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "DELETE") {
    await Praline.findByIdAndDelete(id);
    return response.status(200).json({ status: "Praline deleted" });
  }

  return response.status(404);
}
