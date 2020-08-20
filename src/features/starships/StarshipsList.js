import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

import { fetchStarships, selectAllStarships } from "./starshipsSlice";
import { Title, LoaderWrapper, DataRow, Button } from "../../app/components/StyledComponents";

export const StarshipsList = () => {
  const dispatch = useDispatch();
  const starships = useSelector(selectAllStarships);
  const status = useSelector((state) => state.starships.status);
  const error = useSelector((state) => state.starships.error);

  const Starship = ({ starship }) => (
    <DataRow>
      <p>{starship.name}</p>
      <Link to={`/starships/${starship.name}`}>
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
    content = starships.map((starship, idx) => <Starship key={idx} starship={starship} />);
  } else if (status === "failed") {
    content = error;
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStarships());
    }
  }, [status, dispatch]);

  return (
    <>
      <Title>Starships</Title>

      {content}
    </>
  );
};
