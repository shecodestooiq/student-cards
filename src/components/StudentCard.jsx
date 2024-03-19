import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentCard(props) {
  return (
    <div>
      <Link
        to={`/student/${props.student.id}`}
        state={props.student}
        class='card'
      >
        <div class='front side'>
          <h1 class='logo'>{props.student.name}</h1>
        </div>
      </Link>
    </div>
  );
}
