import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { AboutPage } from '../views/About/AboutPage/AboutPage';
import { HomePage } from '../views/Home/HomePage/HomePage';
import { ProductDetailPage } from '../views/ProductDetail/ProductDetailPage/ProductDetailPage';
import { ProductsPage } from '../views/Products/ProductsPage/ProductsPage';


export const PublicRoutes = () => {
    return (
        <>
            <Navbar />

            <main style={{ backgroundColor: '#EDE6F9', minHeight: '93vh' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="products/:productId" element={<ProductDetailPage />} />
                    <Route path="about" element={<AboutPage />} />
                </Routes>
            </main>
        </>
    )
}
