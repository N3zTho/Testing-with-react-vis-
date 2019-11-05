import React, { useEffect, useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries,
  RadialChart
} from "react-vis";
import moment from "moment";
import "../../../node_modules/react-vis/dist/main.scss";

const Grafico = ({ years, range }) => {
  const [dataBar, setDataBar] = useState([]);
  const [dataPie, setDataPie] = useState([]);
  const [tipoGrafico, setTipoGrafico] = useState(0);

  const handleClick = tipo => {
    setTipoGrafico(tipo);
  };

  useEffect(() => {
    let _dataBar = [];
    let _dataPie = [];

    years.map(year => {
      const _data = {
        year: year.year,
        data: {
          serie: []
        }
      };
      year.serie.map((s, idx) => {
        if (year.year === range.start.year || year.year === range.end.year) {
          if (year.year === range.start.year && year.year === range.end.year) {
            if (idx + 1 >= range.start.month && idx + 1 <= range.end.month) {
              _data.data.serie.push({
                // x: year.year,
                x: moment(`${idx + 1}-${year.year}`, "MM-YYYY").format("MM/YY"),
                y: parseFloat(s)
              });

              _dataPie.push({
                angle: parseFloat(s)
              });
            }
          } else {
            if (
              idx + 1 >= range.start.month &&
              year.year === range.start.year
            ) {
              _data.data.serie.push({
                // x: year.year,
                x: moment(`${idx + 1}-${year.year}`, "MM-YYYY").format("MM/YY"),
                y: parseFloat(s)
              });
              _dataPie.push({
                angle: parseFloat(s)
              });
            }

            if (idx + 1 <= range.end.month && year.year === range.end.year) {
              _data.data.serie.push({
                // x: year.year,
                x: moment(`${idx + 1}-${year.year}`, "MM-YYYY").format("MM/YY"),
                y: parseFloat(s)
              });

              _dataPie.push({
                angle: parseFloat(s)
              });
            }
          }
        } else {
          _data.data.serie.push({
            // x: year.year,
            x: moment(`${idx + 1}-${year.year}`, "MM-YYYY").format("MM/YY"),
            y: parseFloat(s)
          });

          _dataPie.push({
            angle: parseFloat(s)
          });
        }
      });

      _dataBar.push(_data);
    });

    setDataBar(_dataBar);
    setDataPie(_dataPie);
  }, [years]);

  return (
    <>
      <div className="btn-group mt-3 mb-3" role="group">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleClick(0)}
        >
          Linea
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleClick(1)}
        >
          Barra
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleClick(2)}
        >
          Pastel
        </button>
      </div>

      {tipoGrafico !== 2 && (
        <XYPlot xType="ordinal" width={1000} height={300} xDistance={200}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />

          {tipoGrafico === 0 &&
            dataBar.map(year => (
              <LineSeries data={year.data.serie} key={year.year} />
            ))}

          {tipoGrafico === 1 &&
            dataBar.map(year => (
              <VerticalBarSeries data={year.data.serie} key={year.year} />
            ))}
        </XYPlot>
      )}

      {tipoGrafico === 2 && (
        <RadialChart data={dataPie} width={1000} height={300} />
      )}
    </>
  );
};

export default Grafico;
