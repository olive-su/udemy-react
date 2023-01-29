import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* 아래와 같은 하드 코딩을 expense로 포매팅된 값으로 바꿔준다. */}
                {/* {props.items.map(expense => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))} */}
                <ExpensesChart expense={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </div>
    );
};

export default Expenses;
