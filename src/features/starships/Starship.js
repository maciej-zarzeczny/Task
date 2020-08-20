import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectStarshipByName } from "./starshipsSlice";
import { Button, InfoContainer, Info } from "../../app/components/StyledComponents";

export const Starship = ({ match }) => {
  const { starshipName } = match.params;
  const starship = useSelector((state) => selectStarshipByName(state, starshipName));

  return (
    <>
      <h1>{starshipName}</h1>

      <InfoContainer>
        <Info>
          <h4>{starship.crew}</h4>
          <p>Crew</p>
        </Info>
        <Info>
          <h4>{starship.length}</h4>
          <p>Length</p>
        </Info>
        <Info>
          <h4>{starship.passengers}</h4>
          <p>Passengers</p>
        </Info>
      </InfoContainer>

      <Link to="/Task/starships">
        <Button>Back</Button>
      </Link>
    </>
  );
};
