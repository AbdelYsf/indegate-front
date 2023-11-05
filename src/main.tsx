import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";

const theme = {
    navbar: {
        styles: {
            base: {
                navbar: {
                    blurred: {
                        borderWidth: '',
                    },
                },
            },
        },
    },
};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider value={theme}>
    <App />
      </ThemeProvider>
  </React.StrictMode>,
)
