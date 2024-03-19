import { useState } from 'react';
import StudentCard from '../components/StudentCard';
import Sam from '../assets/images/Clover%2C_Alex_and_Sam.webp';
import Anz from '../assets/images/anastasia_1997_001_1_copy_-_h_2017.webp';
import Sandy from '../assets/images/Sandy_stock_art.webp';
import Bradz from '../assets/images/s-l1600.jpg';
function Home() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Arwa', age: 19, hobby: 'Watching Cars', image: Anz },
    { id: 2, name: 'Hawraa', age: 18, hobby: 'Watching Movie', image: Sandy },
    {
      id: 3,
      name: 'Haneen',
      age: 20,
      hobby: 'Reading',
      image: 'https://picsum.photos/seed/picsum/200/300',
    },
    { id: 4, name: 'Sura', age: 20, hobby: 'Coding', image: Sam },
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
