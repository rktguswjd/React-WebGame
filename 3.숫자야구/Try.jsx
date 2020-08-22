import React, { PureComponent, memo, useState } from "react";

// class Try extends PureComponent {
//   state={
//     result : this.props.result,
//     try:this.props.try,
//   }
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

// const Try = memo(({ tryInfo }) => {
//   const [result, setResult] = useState(tryInfo.result);
//   const onClick = () => {
//     setResult("1");
//   };

//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div>
//         {" "}
//         onClick={onClick} {result}
//       </div>
//     </li>
//   );
// });

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
export default Try;
