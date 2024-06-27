import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter } from "react-router-dom"
import './index.scss'
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(  
    <BrowserRouter>
    <App/>  
    </BrowserRouter>
)
