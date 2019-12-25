'use strict'

import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/_reset.css'
import '@styles/index.css'

import App from '@app/home'


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
