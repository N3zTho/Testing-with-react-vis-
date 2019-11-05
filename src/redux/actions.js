export const get_range = range => {
  const start = {
    year: parseInt(range.startDate.format("YYYY")),
    month: parseInt(range.startDate.format("MM"))
  };

  const end = {
    year: parseInt(range.endDate.format("YYYY")),
    month: parseInt(range.endDate.format("MM"))
  };

  return {
    type: "GET_YEARS_FILTERED",
    payload: {
      start,
      end
    }
  };
};
