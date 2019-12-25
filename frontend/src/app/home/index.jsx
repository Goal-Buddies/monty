'use strict'

import { hot } from 'react-hot-loader/root'
import React from 'react'
import styles from '@styles/home.css';

// import "core-js/stable";
// import "regenerator-runtime/runtime";


const App = () => (
    <section className={styles.loginForm}>
        <div className={styles.icons}></div>


        <div className={styles.header}>
            <div className={styles.title}>
                <span>Monty</span>
            </div>

            <div className={styles.subTitle}>
                <span>shopping planner</span>
            </div>
        </div>


        <div className={styles.form}>
            <input type="password" className={styles.input} placeholder="Enter password" />

            <button className={styles.button}>Login</button>
        </div>
    </section>
)


export default hot(App)
