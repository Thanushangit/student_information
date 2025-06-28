import { model, Schema } from "mongoose";

const StudentSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  created_At: {
    type: Date,
    default: Date.now(),
  },
});

const Student = model("Student", StudentSchema);

export default Student;
