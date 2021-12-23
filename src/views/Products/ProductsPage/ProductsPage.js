import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCard } from '../ProductCard/ProductCard';

import { getProducts, selectProducts } from '../../../features/products/products.slice';

import ProductsPageStyles from './ProductsPage.styles';

export const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <main style={{ backgroundColor: '#EDE6F9' }}>
            <ProductsPageStyles>
                {products.map(product => <ProductCard key={product.id} {...product} />)}
            </ProductsPageStyles>
        </main>
    )
}
