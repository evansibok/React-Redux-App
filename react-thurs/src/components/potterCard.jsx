import React from 'react'

export const PotterCard = ({ potts }) => {

  return (
    <div>
      <h3>Name: {potts.name}</h3>
      <p>Role: {potts.role}</p>
      <p>House: {potts.house}</p>
      <p>School: {potts.school}</p>
      <p>Blood: {potts.bloodStatus}</p>
      <p>Species: {potts.species}</p>
    </div>
  );
}

export default PotterCard;