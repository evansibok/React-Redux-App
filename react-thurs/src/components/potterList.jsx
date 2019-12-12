import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getPotter } from "../redux/actionCreators";
import PotterCard from "./potterCard";

const ListCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export function PotterList({ potter, getPotter }) {
  useEffect(() => {
    getPotter();
  }, [getPotter]);

  return (
    <div>
      <h1>List of Harry Potter Characters</h1>
      <h3>Displayed using Async Redux</h3>
      <ListCon>
        {potter &&
          potter.map(potts => (<PotterCard key={potts._id} potts={potts} />))
        }
      </ListCon>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    potter: state.potter
  };
}

export default connect(mapStateToProps, { getPotter })(PotterList);
