import React from 'react';

const BoxMethod = (props) => {
  let backgroundColor, color;

  // Determinar estilos com base no método
  switch (props.method) {
    case 'POST':
      backgroundColor = '#ffd700';
      color = 'black';
      break;
    case 'GET':
      backgroundColor = 'green';
      color = 'white';
      break;
    case 'DELETE':
      backgroundColor = 'red';
      color = 'white';
      break;
    case 'PATCH':
      backgroundColor = 'blue';
      color = 'white';
      break;
    case 'PUT':
      backgroundColor = 'orange';
      color = 'black';
      break;
    default:
      backgroundColor = 'transparent';
      color = 'black';
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor,
        color,
        width: 'fit-content',
        padding: '4px',
        margin: '5px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <strong>{props.method}</strong>
      </div>
      <div>
        <code>{props.endpoint}</code>
      </div>
    </div>
  );
};

export default BoxMethod;
