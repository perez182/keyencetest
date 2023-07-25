import { Attendance } from "../models/Attendance.js";
import { Task } from "../models/Task.js";

export async function getAttendances(req, res) {
  try {
    const attendances = await Attendance.findAll({
      atributes: ["Employeeid", "Employeename", "date", "punchin", "punchout"],
    });
    res.json(attendances);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createAttendance(req, res) {
  const { Employeename, date, punchin, punchout } = req.body;
  try {
    let newattendance = await Attendance.create(
      {
        Employeename,
        date,
        punchin,
        punchout,
      },
      {
        fields: ["Employeename", "date", "punchin", "punchout"],
      }
    );
    return res.json(newattendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getAttendance(req, res) {
  const { id } = req.params;
  try {
    const attendance = await attendance.findOne({
      where: {
        id,
      },
    });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const attendance = await attendance.findByPk(id);
    attendance.name = name;
    attendance.priority = priority;
    attendance.description = description;
    await attendance.save();

    res.json(attendance);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteAttendance(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        attendanceId: id,
      },
    });
    await attendance.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

