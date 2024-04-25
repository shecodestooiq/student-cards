import axios from 'axios';
import React, { useState } from 'react';
export default function AddStudent({ setStudents }) {
  const [name, setName] = useState('');

  const getData = () => {
    axios.get(`http://localhost:8080/users`).then((res) => {
      setStudents(res.data);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/users`, { name })
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}
