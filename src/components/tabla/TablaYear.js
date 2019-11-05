import React from "react";
import { meses } from "../../helpers/data";

const TablaYear = ({ tabla, range }) => {
  return (
    <>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th colSpan={12} className="text-center">
              {tabla.year}
            </th>
          </tr>
          <tr>
            {meses.map((mes, idx) => {
              if (
                tabla.year === range.start.year ||
                tabla.year === range.end.year
              ) {
                if (
                  tabla.year === range.start.year &&
                  tabla.year === range.end.year
                ) {
                  if (
                    idx + 1 >= range.start.month &&
                    idx + 1 <= range.end.month
                  ) {
                    return (
                      <th scope="col" key={idx}>
                        {mes}
                      </th>
                    );
                  }
                } else {
                  if (
                    idx + 1 >= range.start.month &&
                    tabla.year === range.start.year
                  )
                    return (
                      <th scope="col" key={idx}>
                        {mes}
                      </th>
                    );

                  if (
                    idx + 1 <= range.end.month &&
                    tabla.year === range.end.year
                  ) {
                    return (
                      <th scope="col" key={idx}>
                        {mes}
                      </th>
                    );
                  }
                }
              } else {
                return (
                  <th scope="col" key={idx}>
                    {mes}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tabla.serie.map((d, idx) => {
              if (
                tabla.year === range.start.year ||
                tabla.year === range.end.year
              ) {
                if (
                  tabla.year === range.start.year &&
                  tabla.year === range.end.year
                ) {
                  if (
                    idx + 1 >= range.start.month &&
                    idx + 1 <= range.end.month
                  ) {
                    return <td key={idx}>{d}</td>;
                  }
                } else {
                  if (
                    idx + 1 >= range.start.month &&
                    tabla.year === range.start.year
                  )
                    return <td key={idx}>{d}</td>;

                  if (
                    idx + 1 <= range.end.month &&
                    tabla.year === range.end.year
                  ) {
                    return <td key={idx}>{d}</td>;
                  }
                }
              } else {
                return <td key={idx}>{d}</td>;
              }
            })}
          </tr>
          <tr>
            {tabla.tendencia.map((d, idx) => {
              if (
                tabla.year === range.start.year ||
                tabla.year === range.end.year
              ) {
                if (
                  tabla.year === range.start.year &&
                  tabla.year === range.end.year
                ) {
                  if (
                    idx + 1 >= range.start.month &&
                    idx + 1 <= range.end.month
                  ) {
                    return <td key={idx}>{d}</td>;
                  }
                } else {
                  if (
                    idx + 1 >= range.start.month &&
                    tabla.year === range.start.year
                  )
                    return <td key={idx}>{d}</td>;

                  if (
                    idx + 1 <= range.end.month &&
                    tabla.year === range.end.year
                  ) {
                    return <td key={idx}>{d}</td>;
                  }
                }
              } else {
                return <td key={idx}>{d}</td>;
              }
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TablaYear;
