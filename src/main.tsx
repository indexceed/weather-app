import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from '@mui/material/Button';

import {WeatherApp} from './WeatherApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
)
