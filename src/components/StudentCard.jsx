import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentCard(props) {
  const getData = () => {
    axios.get(`http://localhost:8080/users`).then((res) => {
      props.setStudents(res.data);
    });
  };
  const deleteItem = (id) => {
    axios.delete(`http://localhost:8080/users/${id}`).then((res) => {
      getData();
    });
  };
  const updateItem = (id) => {
    axios
      .put(`http://localhost:8080/users/${id}`, {
        name: 'Zho Li',
      })
      .then((response) => {
        getData();
      });
  };
  return (
    <div class='card'>
      <Link to={`/student/${props.student.id}`} state={props.student}>
        <div class='front side'>
          <h1 class='logo'>{props.student.name}</h1>
        </div>
      </Link>
      <button onClick={() => deleteItem(props.student.id)}>Delete</button>
      <button onClick={() => updateItem(props.student.id)}>Update</button>
    </div>
  );
}
