import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

import { fetchVehicles, selectAllVehicles } from "./vehiclesSlice";
import { Title, LoaderWrapper, Button, DataRow } from "../../app/components/StyledComponents";

export const VehiclesList = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector(selectAllVehicles);
  const status = useSelector((state) => state.vehicles.status);
  const error = useSelector((state) => state.vehicles.error);

  const Vehicle = ({ vehicle }) => (
    <DataRow>
      <p>{vehicle.name}</p>
      <Link to={`/vehicles/${vehicle.name}`}>
        <Button>More info</Button>
      </Link>
    </DataRow>
  );

  let content;
  if (status === "loading") {
    content = (
      <LoaderWrapper>
        <ClipLoader size={32} color={"#123abc"} loading={status === "loading"} />
      </LoaderWrapper>
    );
  } else if (status === "succeeded") {
    content = vehicles.map((vehicle, idx) => <Vehicle key={idx} vehicle={vehicle} />);
  } else if (status === "failed") {
    content = error;
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVehicles());
    }
  }, [status, dispatch]);

  return (
    <>
      <Title>Vehicles</Title>
      {content}
    </>
  );
};
