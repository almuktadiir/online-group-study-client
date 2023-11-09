import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Router.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import { motion } from "framer-motion"

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20
      }} > 
      <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
      </motion.div>
    
  </React.StrictMode>,
)


