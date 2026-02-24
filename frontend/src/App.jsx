import axios from "axios";
import { useState } from "react";

const App = () => {

  const studentSchema = {
    studentName: "",
    age: "",
    gender: "",
    course: "",
    email: "",
    phone: "",
    address: "",
    createdBy: "",
    updatedBy: ""
  };

  const [data, setData] = useState(studentSchema);
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post( "http://localhost:5000/api/student/create", data);

      alert(res.data.msg);
      setData(studentSchema);
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/student/getData");
      setStudents(res.data.myDatas);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Student Register Form</h1>

      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>

        <input type="text" name="studentName" placeholder="Student Name" value={data.studentName} onChange={handleChange} required />
        <br /><br />

        <input type="number" name="age" placeholder="Age" value={data.age} onChange={handleChange} required />
        <br /><br />

        <select name="gender" value={data.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br /><br />

        <input type="text" name="course" placeholder="Course" value={data.course} onChange={handleChange} required />
        <br /><br />

        <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required />
        <br /><br />

        <input type="text" name="phone" placeholder="Phone Number" value={data.phone}  onChange={handleChange} required />
        <br /><br />

        <textarea name="address" placeholder="Address" value={data.address} onChange={handleChange} required />
        <br /><br />

        <button type="submit">Register Student</button>

      </form>

      <hr />

      <div style={{ padding: "20px" }}>
        <button onClick={fetchStudents}>Fetch Students</button>

        {students.map((student) => (
          <div key={student._id}
            style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{student.studentName}</h3>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <p>Email: {student.email}</p>
            <p>Status: {student.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;