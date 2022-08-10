import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { firebaseConnectiosns } from './firebase/config'

firebaseConnectiosns()

ReactDOM.createRoot(document.getElementById('root')).render(
      <App />
)
