import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

import { fetchPlanets, selectAllPlanets } from "./planetsSlice";
import { Title, LoaderWrapper, DataRow, Button } from "../../app/components/StyledComponents";

export const PlanetsList = () => {
  const dispatch = useDispatch();
  const planets = useSelector(selectAllPlanets);
  const status = useSelector((state) => state.planets.status);
  const error = useSelector((state) => state.planets.error);

  const Planet = ({ planet }) => (
    <DataRow>
      <p>{planet.name}</p>
      <Link to={`/planets/${planet.name}`}>
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
    content = planets.map((planet, idx) => <Planet key={idx} planet={planet} />);
  } else if (status === "failed") {
    content = error;
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPlanets());
    }
  }, [status, dispatch]);

  return (
    <>
      <Title>Planets</Title>
      {content}
    </>
  );
};
