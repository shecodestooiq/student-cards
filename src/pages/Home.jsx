import { useEffect, useState } from 'react';
import StudentCard from '../components/StudentCard';
import AddStudent from '../components/AddStudent';
import axios from 'axios';
function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/users`).then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <div className='card-container'>
      <AddStudent setStudents={setStudents} />
      {students.map((student) => (
        <StudentCard student={student} setStudents={setStudents} />
      ))}
    </div>
  );
}

export default Home;
