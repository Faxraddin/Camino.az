import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './layout'

import Header from './components/header'
import FindJob from './components/find'

import './index.css'
import { BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>

  </React.StrictMode>,
)
