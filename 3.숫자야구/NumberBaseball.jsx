import React, { Component } from "react";
import Try from "./Try";
// exports되는 게 객체나 배열이면 구조 분해할 수 있다.

function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

  fruits = [
    { fruit: "사과", taste: "마싯다" },
    { fruit: "딸기", taste: "맛잇" },
    { fruit: "배", taste: "그저그럼" },
    { fruit: "밤", taste: "굿" },
    { fruit: "수박", taste: "개꿀" },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            vlaue={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v, i) => {
            return <Try value={v} index={i} />;
          })}
        </ul>
      </>
    );
  }
}

// export const hello = "hello";
// export const bye = "hello"; // import { hello }
export default NumberBaseball; // import NumberBaseball;

// const React = require('react');
// module.hello = 'hello';
// module.exports = NumberBaseball;
