import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='<GOOGLE_CLIENT_ID>'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
