import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          return <p>Jesteś na stronie głównej</p>;
        }}
      />
      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <>
              <p>
                Jesteś na stronie <span>{props.match.params.page}</span>
              </p>
              <p>
                URL: <span>{props.match.url}</span>
              </p>
              <p>
                PATH: <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
      <Route
        path="/:page/:id"
        exact
        render={(props) => {
          return (
            <>
              <p>
                Jesteś na stronie{" "}
                <span>
                  {props.match.params.page} - {props.match.params.id}
                </span>
              </p>
              <p>
                URL: <span>{props.match.url}</span>
              </p>
              <p>
                PATH: <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
