import React from 'react';

export default function StudentCard(props) {
  return (
    <div>
      <div class='card'>
        <div class='front side'>
          <h1 class='logo'>{props.student.name}</h1>
        </div>
      </div>
    </div>
  );
}
