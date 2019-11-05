import data from "../helpers/data";

const initialData = {
  years: data,
  filtered: [],
  range: {
    start: null,
    end: null
  }
};

const reducers = (state = initialData, action) => {
  switch (action.type) {
    case "GET_YEARS_FILTERED":
      let _tablas = [];
      for (
        let year = action.payload.start.year;
        year <= action.payload.end.year;
        year++
      ) {
        if (state.years[year]) {
          _tablas.push({
            year: parseInt(year),
            ...state.years[year]
          });
        }
      }

      return {
        ...state,
        filtered: _tablas,
        range: {
          start: action.payload.start,
          end: action.payload.end
        }
      };

    default:
      return state;
  }
};

export default reducers;
