import reducers from "../redux/reducer";
import data from "../helpers/data";

it("Estado por defecto", () => {
  const state = {
    years: data,
    filtered: []
  };

  expect(reducers(state, { type: undefined })).toEqual(state);
});

it("Mostrar Annos", () => {
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

  expect(reducer).toEqual({
    ...state,
    filtered: reducer.filtered
  });
});
