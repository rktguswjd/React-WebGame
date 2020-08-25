import React, { useCallback } from "react";
import { CLICK_CELL, SET_TURN } from "./TicTacToe";

const Td = ({ rowIndex, cellIndex }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: SET_TURN });
  }, []);

  return <td onClick={onClickTd}>{""}</td>;
};

export default Td;
