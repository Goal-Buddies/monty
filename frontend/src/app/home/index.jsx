'use strict'

import { hot } from 'react-hot-loader/root'
import React from 'react'
import styles from '@styles/home.css';

// import "core-js/stable";
// import "regenerator-runtime/runtime";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUnlock } from '@fortawesome/free-solid-svg-icons'


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
            <div className={styles.inputGroup}>
                <FontAwesomeIcon icon={faUnlock} color="#637EFF" pull="right" />
                <input type="password" className={styles.input} placeholder="Secret password" autofocus="true" />
            </div>

            <button className={styles.button}>
                <span>Enter</span>
                <FontAwesomeIcon icon={faAngleRight} pull="right" />
            </button>
        </div>

        <div className={styles.copy}>
            <span>Goal Buddies, 2020</span>
        </div>
    </section>
)


export default hot(App)
