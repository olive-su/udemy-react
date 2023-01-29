import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
    // 컴포넌트 당 두 개 이상의 상태를 가질 수도 있다.
    // 각각의 상태 관리하는 방법
    //   const [enteredTitle, setEnteredTitle] = useState("");
    //   const [enteredAmount, setEnteredAmount] = useState("");
    //   const [enteredDate, setEnteredDate] = useState("");

    // 하나의 객체로 묶어서 상태관리 하는 방법
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = event => {
        // console.log(event.target.value); // 이벤트가 발생한 타겟에 대한 밸류 값을 가져온다.

        /* 방법 1 */
        // setEnteredTitle(event.target.value);

        /* 방법 2 */
        // setUserInput({
        //   ...userInput, // userInput을 복사하고
        //   enteredTitle: event.target.value, // enteredTitle을 오버라이딩한다.
        // });

        /* 방법 3 */
        setUserInput(prevState => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    };

    const amountChangeHandler = event => {
        setUserInput(prevState => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    };

    const dateChangeHandler = event => {
        setUserInput(prevState => {
            return { ...prevState, enteredDate: event.target.value };
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        console.log(userInput);
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };
        console.log(expenseData);

        props.onSaveExpenseData(expenseData); // 자식 컴포넌트가 부모 컴포넌트에 있는 함수를 실행할 수 있다.
        // 입력 폼으로 받은 데이터들을 상위 컴포넌트에 넘겨준다.
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
