# backend
fastapi  

# frontend
vite & react  

# adapt bootstrap 5.3
- npm i --save bootstrap @popperjs/core
- npm i --save-dev sass
- index.css --> index.scss

// index.scss  
// add following lines  
@import "bootstrap/scss/bootstrap";  

// main.jsx  
// add following lines  
// import './index.css'  
import './index.scss'  
import * as bootstrap from 'bootstrap'  

// now you don't need to import them in every jsx files.  

# styled componenet

- npm i styled-components
- import styled from "styled-components"