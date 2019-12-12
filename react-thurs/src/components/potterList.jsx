import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPotter } from "../redux/actionCreators";
import PotterCard from "./potterCard";

export function PotterList({ potter, getPotter }) {
  console.log(potter)
  debugger
  useEffect(() => {
    getPotter();
  }, []);

  return (
    <div>
      {potter && potter.map(potts => (
        <PotterCard key={potts._id} potts={potts}/>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    potter: state.potter,
  };
}

export default connect(mapStateToProps, { getPotter })(PotterList);
