import React from "react";
// require : 자바스크립트 자체가 지원하는 패키지 읽는 방법
// import : ES6의 사양으로 새로운 패키지 읽는 방법
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import NumberBaseball from "./NumberBaseball";
const Hot = hot(NumberBaseball);

ReactDOM.render(<Hot />, document.querySelector("#root"));
