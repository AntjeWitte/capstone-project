import mongoose from "mongoose";

const { Schema } = mongoose;

const pralinenSchema = new Schema({
  name: { type: String, required: true },
  //   weight: { type: String, required: true },
  //   version: { type: String, required: true },
  //   ingredients: { type: Array, required: true },
  //   allergyTraces: { type: Array, required: false },
});

const Praline =
  mongoose.models.Praline ||
  mongoose.model("Praline", pralinenSchema, "pralinen");

export default Praline;
