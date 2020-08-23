import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요.");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  // setState를 하면 return부분이 다시 실행되지만 useRef를 바꿀때는 return이 실행되지 않음
  // 값이 바껴도 렌더링을 다시 시키고 싶지 않은(화면에 영향 x) 값들은 Ref를 사용

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요.");

      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금클릭!!");

        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2초~3초 랜덤
    } else if (state === "ready") {
      //  성급하게 클릭
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요.");
    } else if (state === "now") {
      // 반응속도 체크
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하세요.");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms
        </div>
        <button onClick={onReset}>리셋</button>{" "}
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {/* {(() => {
        if (result.length === 0) {
          return null;
        } else {
          return (
            <>
              <div>
                평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms
              </div>
              <button onClick={onReset}>리셋</button>
            </>
          );
        }
      })()} */}

      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
