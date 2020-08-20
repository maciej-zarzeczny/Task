import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { PlanetsList } from "./features/planets/PlanetsList";
import { Planet } from "./features/planets/Planet";

import { StarshipsList } from "./features/starships/StarshipsList";
import { Starship } from "./features/starships/Starship";

import { VehiclesList } from "./features/vehicles/VehiclesList";
import { Vehicle } from "./features/vehicles/Vehicle";

import { Navbar } from "./app/components/Navbar";
import styled from "styled-components";

const Container = styled.section`
  max-width: 1000px;
  margin: 2rem auto;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/Task/" component={PlanetsList} />
            <Route exact path="/Task/planets/:planetName" component={Planet} />

            <Route exact path="/Task/starships" component={StarshipsList} />
            <Route exact path="/Task/starships/:starshipName" component={Starship} />

            <Route exact path="/Task/vehicles" component={VehiclesList} />
            <Route exact path="/Task/vehicles/:vehicleName" component={Vehicle} />

            <Redirect to="/Task" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
