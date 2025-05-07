import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShoppingCards from './ShoppingCards.tsx'
import { BrowserRouter } from "react-router";
import ErrorBoundary from "@/error/ErrorBoundary.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <ErrorBoundary>
                <ShoppingCards />
            </ErrorBoundary>
        </StrictMode>
    </BrowserRouter>
)
