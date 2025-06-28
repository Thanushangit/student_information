import Student from "../Models/StudentModel.js";

export const getAllInformation = async (req, res) => {
  try {
    const data = await Student.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const getOneRecord = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Student.findById({ _id: id });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const addInformation = async (req, res) => {
  const data = new Student({
    fullName: req.body.fullName,
    studentId: req.body.studentId,
    phoneNumber: req.body.phoneNumber,
    course: req.body.course,
    year: req.body.year,
    nic: req.body.nic,
    address: req.body.address,
  });

  try {
    const result = await data.save();
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateParticularInformation = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Student.findOneAndUpdate(
      { _id: id },
      {
        fullName: req.body.fullName,
        studentId: req.body.studentId,
        phoneNumber: req.body.phoneNumber,
        course: req.body.course,
        year: req.body.year,
        nic: req.body.nic,
        address: req.body.address,
      },
      { new: true }
    );
    return(res.status(200).json(updated))
  } catch (err) {
    return res.status(400).json({message:err.message});
  }
};

export const deleteParticulatInformation = async (req, res) => {
  const id = req.params.id;
  try {
    await Student.deleteOne({ _id: id });
    return res.status(200).json({ message: "item deleted successfully..." });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
