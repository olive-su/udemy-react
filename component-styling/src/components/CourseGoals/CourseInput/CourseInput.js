import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
    // const FormControl = styled.div`
    //     margin: 0.5rem 0;

    //     $ label {
    //         font-weight: bold;
    //         display: block;
    //         margin-bottom: 0.5rem;
    //         color: ${props => (props.invalid ? 'red' : 'black')};
    //     }

    //     $ input {
    //         display: block;
    //         width: 100%;
    //         border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    //         background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
    //         font: inherit;
    //         line-height: 1.5rem;
    //         padding: 0 0.25rem;
    //     }

    //     $ input:focus {
    //         outline: none;
    //         background: #fad0ec;
    //         border-color: #8b005d;
    //     }
    // `;

    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if (enteredValue.trim().length > 0) {
            // trim을 쓰면 앞 뒤의 공백을 제거해준다.
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            // trim을 쓰면 앞 뒤의 공백을 제거해준다.
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                {/* styled component에 invalid를 넘겨준다. */}
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
