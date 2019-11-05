import React from "react";

import TablaYear from "./TablaYear";

const Tablas = ({ years, range }) => {
  return (
    <>
      <div className="table-responsive">
        {years.map(tabla => (
          <table className="table table-borderless table-sm" key={tabla.year}>
            <tbody>
              <tr>
                <td>
                  <table className="table table-bordered">
                    <thead className="thead-light">
                      <tr>
                        <th>&nbsp;</th>
                      </tr>
                      <tr>
                        <th>Denominacion</th>
                      </tr>
                      <tr>
                        <td>Serie desestacionalizada</td>
                      </tr>
                      <tr>
                        <td>Tendencia ciclo</td>
                      </tr>
                    </thead>
                  </table>
                </td>
                <td>
                  <TablaYear tabla={tabla} range={range} />
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};

export default Tablas;
