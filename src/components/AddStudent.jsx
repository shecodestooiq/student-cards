import React, { useState } from 'react';
import axios from 'axios';
export default function AddStudent({ setStudents }) {
  const [name, setName] = useState('');
  const [flag, setFlag] = useState(false);

  const getData = () => {
    axios.get(`http://localhost:8080/users`).then((res) => {
      setStudents(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/users', {
        name: name,
      })
      .then((res) => {
        getData();
      });
  };
  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
