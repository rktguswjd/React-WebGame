import React, { Component } from "react";
import Try from "./Try";
// exports되는 게 객체나 배열이면 구조 분해할 수 있다.

function getNumbers() {
  //숫자 네 개를 겹치지 않고 랜덤하기 뽑는 함수
  const condidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    // 배열 객체에서 제공하는 splice는 원하는 위치에 요소를 추가하거나 삭제할 수 있음 !
    const chosen = condidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(), // ex : [1,3,5,7]
    tries: [], //push 쓰면 안됨 리액트가 모름!!
  };

  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value === answer.join("")) {
      // join : 하나의 문자로 합침, 괄호안에 구분자 !
      this.setState({
        result: "홈런",
        tries: [...tries, { try: value, result: "홈런" }],
        // push 쓰면 안됨 리액트가 모름!!
        // 전개 연산자( ... )를 사용해 좌항에서 명시적으로 할당되지 않은 나머지 배열 값들을 사용해야함
      });
      alert("게임을 다시 시작합니다.");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      // 답 틀림
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패 ! 답은 ${answer.join(",")}였습니다 !`,
        });
        alert("게임을 다시 시작합니다.");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...tries,
            {
              try: value,
              result: `${strike} 스트라이크, ${ball} 볼입니다.`,
            },
          ],
          value: "",
        });
      }
    }
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        {/* jsx의 주석처리 */}
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} vlaue={value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />;
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
