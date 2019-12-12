import React from "react";

export const PotterCard = ({ potts }) => {
  return (
    <div
      style={{
        background: "#ef284d",
        color: "#fff",
        margin: "1em",
        width: "350px",
        borderRadius: "1em",
        boxShadow: "2px 2px 10px #b5b5b5"
      }}
    >
      <div
        style={{
          margin: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h3>{potts.name}</h3>
        <p>Role: {potts.role ? potts.role : "Not Assigned"}</p>
        <p>House: {potts.house ? potts.house : "Not Assigned"}</p>
        <p>School: {potts.school ? potts.school : "Not Assigned"}</p>
        <p>Blood: {potts.bloodStatus ? potts.bloodStatus : "Not Assigned"}</p>
        <p>Species: {potts.species ? potts.species : "Not Assigned"}</p>
      </div>
    </div>
  );
};

export default PotterCard;
