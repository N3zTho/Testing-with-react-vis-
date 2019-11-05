import React, { useState } from "react";
import { connect } from "react-redux";
import Grafico from "./components/grafico";
import Tablas from "./components/tabla/Tablas";
import { get_range } from "./redux/actions";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App({ state, get_range }) {
  const [vista, setVista] = useState(0);
  const [showFiltro, setShowFiltro] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClick = _vista => {
    setVista(_vista);
  };

  const handleClickFiltros = () => {
    setShowFiltro(!showFiltro);
  };

  const handleSelectStart = date => {
    setRange(date, endDate);
    setStartDate(date);
  };

  const handleSelectEnd = date => {
    setRange(startDate, date);
    setEndDate(date);
  };

  const setRange = (start, end) => {
    const range = {
      startDate: moment(start),
      endDate: moment(end)
    };

    get_range(range);
  };

  const handleClickAplicar = evt => {
    const range = {
      startDate: moment(startDate),
      endDate: moment(endDate)
    };

    get_range(range);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Tasa de desocupacion</h2>
          </div>
        </div>
        <div className="row justify-content-end mb-5">
          <div className="col-6 text-right">
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => handleClick(0)}
              >
                <i className="fa fa-table"></i>
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => handleClick(1)}
              >
                <i className="fa fa-chart-line"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickFiltros}
          >
            {!showFiltro ? "Mostrar" : "Ocultar"} Filtros
          </button>
        </div>
        {showFiltro && (
          <div className="row mb-5">
            <div className="col-3">
              <div>
                <label>Rango inicial</label>
              </div>
              <DatePicker
                selected={startDate}
                onChange={handleSelectStart}
                className="form-control"
                selectsStart
                minDate={new Date(2006, 0, 1)}
                maxDate={new Date(2019, 11, 31)}
                startDate={startDate}
                endDate={endDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
            </div>

            <div className="col-3">
              <div>
                <label>Rango final</label>
              </div>
              <DatePicker
                selected={endDate}
                onChange={handleSelectEnd}
                minDate={new Date(2006, 0, 1)}
                maxDate={new Date(2019, 11, 31)}
                className="form-control"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
            </div>

            <div className="col-3">
              <div>
                <label>&nbsp;</label>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleClickAplicar}
              >
                Aplicar
              </button>
            </div>
          </div>
        )}

        {vista === 0 && <Tablas years={state.filtered} range={state.range} />}

        {vista === 1 && <Grafico years={state.filtered} range={state.range} />}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = {
  get_range
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
