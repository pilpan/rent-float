import React from 'react';

function Main({ authState }) {
  return (
    <div>
      <h1></h1>
      <p>
        Добро пожаловавть,
        {' '}
        {authState ? `${authState.name}` : 'гость!'}
      </p>
    </div>
  );
}

export default Main;