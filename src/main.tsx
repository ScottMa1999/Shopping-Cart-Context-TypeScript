import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// rtk query
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { ProductsApi } from './api/ProductsApi.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={ProductsApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
