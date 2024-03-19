import { useState } from 'react';
import StudentCard from '../components/StudentCard';
function Home() {
  const [students, setStudents] = useState([
    { name: 'Arwa', isSCTStudent: true },
    { name: 'Hawraa', isSCTStudent: true },
    { name: 'Duha', isSCTStudent: false },
    { name: 'Sura', isSCTStudent: true },
  ]);

  return (
    <div className='card-container'>
      {students.map((student) => (
        <StudentCard student={student} />
      ))}
    </div>
  );
}

export default Home;
