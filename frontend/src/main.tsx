import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css' // <-- BU SATIRIN EKLENDİĞİNDEN EMİN OLUN
import { BrowserRouter } from 'react-router-dom'
import { EventsProvider } from './context/EventsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <EventsProvider>
        <App />
      </EventsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)