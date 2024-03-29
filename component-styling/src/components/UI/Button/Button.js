/* styled component 적용 방식 */
// import styled from 'styled-components';

// const Button = styled.button`
// width: 100%;
// font: inherit;
// padding: 0.5rem 1.5rem;
// border: 1px solid #8b005d;
// color: white;
// background: #8b005d;
// box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
// cursor: pointer식

// @media (min-width: 768px) {
//   width: auto;
// }

// $:focus {
//   outline: none;
// }

// $:hover,
// $:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `;

/* 기존 css 코드 적용 방식 */
// import React from 'react';
// import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

/* css module 적용 방식 */
import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
