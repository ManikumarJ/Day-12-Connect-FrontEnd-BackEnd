import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    course: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);

const studentDataModel = mongoose.model("studentsData", studentSchema);

export default studentDataModel;