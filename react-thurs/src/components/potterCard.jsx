import React from "react";
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
  max-width: 400px;
  background: red;
`;

export const PotterCard = ({ potts }) => {
  return (
    <Container>
      <h3>Name: {potts.name}</h3>
      <p>Role: {potts.role}</p>
      <p>House: {potts.house}</p>
      <p>School: {potts.school}</p>
      <p>Blood: {potts.bloodStatus}</p>
      <p>Species: {potts.species}</p>
    </Container>
  );
};

export default PotterCard;
