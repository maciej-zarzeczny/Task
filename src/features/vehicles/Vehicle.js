import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectVehicleByName } from "./vehiclesSlice";
import { Button, InfoContainer, Info } from "../../app/components/StyledComponents";

export const Vehicle = ({ match }) => {
  const { vehicleName } = match.params;
  const vehicle = useSelector((state) => selectVehicleByName(state, vehicleName));

  return (
    <>
      <h1>{vehicleName}</h1>

      <InfoContainer>
        <Info>
          <h4>{vehicle.crew}</h4>
          <p>Crew</p>
        </Info>
        <Info>
          <h4>{vehicle.length}</h4>
          <p>Length</p>
        </Info>
        <Info>
          <h4>{vehicle.passengers}</h4>
          <p>Passengers</p>
        </Info>
      </InfoContainer>

      <Link to="/Task/vehicles">
        <Button>Back</Button>
      </Link>
    </>
  );
};
