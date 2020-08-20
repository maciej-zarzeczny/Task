import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPlanetByName } from "./planetsSlice";
import { Button, InfoContainer, Info } from "../../app/components/StyledComponents";

export const Planet = ({ match }) => {
  const { planetName } = match.params;
  const planet = useSelector((state) => selectPlanetByName(state, planetName));

  return (
    <>
      <h1>{planetName}</h1>

      <InfoContainer>
        <Info>
          <h4>{planet.population}</h4>
          <p>Population</p>
        </Info>
        <Info>
          <h4>{planet.diameter}</h4>
          <p>Diameter</p>
        </Info>
        <Info>
          <h4>{planet.rotation_period}</h4>
          <p>Rotation period</p>
        </Info>
      </InfoContainer>

      <Link to="/">
        <Button>Back</Button>
      </Link>
    </>
  );
};
