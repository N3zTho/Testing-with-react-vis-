import React, { useState } from "react";
import { create, act } from "react-test-renderer";
import data from "../../helpers/data";
import reducers from "../../redux/reducer";
import Grafico from "../../components/grafico";

const BotonMostrar = ({ years }) => {
  return <Grafico years={years} />;
};

it("as a u user I can show filtered years", () => {
  const state = {
    years: data,
    filtered: []
  };

  const payload = {
    start: {
      year: 2016
    },
    end: {
      year: 2019
    }
  };

  const reducer = reducers(state, { type: "GET_YEARS_FILTERED", payload });

  let component;

  act(() => {
    component = create(<BotonMostrar years={reducer.filtered} />);
  });

  expect(component.toJSON()).toMatchSnapshot();
});
