import React from 'react';
import './styles.css';

export default function Card({ item }) {
  return (
    <>
      <div className="card">
        <img className="image" src={item.img} />
        <h2>{item.name}</h2>
        <p>{item.email}</p>
      </div>
    </>
  );
}
