import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCardStyles from './ProductCard.styles'

export const ProductCard = ({ id, title, price, description, category, image, rating }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${id}`);
    };

    return (
        <ProductCardStyles onClick={handleClick}>
            <div className="product-card__image">
                <img src={image} alt="" />

            </div>
            <div className="product-card__detail">
                <p className="product-card__title">{title}</p>
                <p className="product-card__price">${price}</p>
            </div>

        </ProductCardStyles>
    )
}
