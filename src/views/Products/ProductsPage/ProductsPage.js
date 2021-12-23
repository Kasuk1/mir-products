import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCard } from '../ProductCard/ProductCard';

import { getProducts, selectGetProductsLoading, selectProducts } from '../../../features/products/products.slice';

import ProductsPageStyles from './ProductsPage.styles';

export const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const productsLoading = useSelector(selectGetProductsLoading);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    if (productsLoading) return (
        <ProductsPageStyles>
            <h1>Loading Products...</h1>
        </ProductsPageStyles>

    );

    return (
        <ProductsPageStyles>
            {products.map(product => <ProductCard key={product.id} {...product} />)}
        </ProductsPageStyles>
    )
}
