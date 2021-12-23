import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PublicRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
