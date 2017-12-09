import React from 'react';

export default ({amount, createdAt, description}) => (
  <div>
    <h4>{amount} | {createdAt}</h4>
    <p>{description}</p>
  </div>
);