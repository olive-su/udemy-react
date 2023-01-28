import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // 3. 초깃값으로 props.title을 할당한다.(첫 번째 인자 : useState로 관리되는 값의 현재값, 두 번째 인자 : 업데이트 함수)
  const clickHandler = () => {
    setTitle("Updated!"); // 2. setTitle 함수를 호출함으로써 title변수에 변화가 생기고 함수콜이 끝나면 다시 ExpenseItem이 수행된다.
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* 1. clickHandler를 트리거 함수로 지정하면 버튼을 클릭할 때마다 해당 함수가 작동한다. */}
    </Card>
  );
};

export default ExpenseItem;
