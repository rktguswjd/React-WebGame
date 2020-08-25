import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i}>
            {""}
          </Td>
        ))}
    </tr>
  );
};
export default Tr;
