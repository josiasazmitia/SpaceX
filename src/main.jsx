import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './app/router.js'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './app/queryClient.js'
import { RouterProvider } from 'react-router'
import './styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
