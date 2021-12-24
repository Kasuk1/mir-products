import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductCardStyles from './ProductCard.styles';

export const ProductCard = ({ id, title, price, description, category, image, rating }) => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(Math.floor((Math.random() * 1) * 60000));
    const [minutes, setMinutes] = useState(Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)));
    const [seconds, setSeconds] = useState(Math.floor((timer % (1000 * 60)) / 1000));

    //TODO: CREAR NUEVO COMPONENTE TIMER Y COLOCAR SU LÓGICA ALLÍ
    //TODO: MEJORAR UX CON RESPECTO AL TIMER Y ESTE PRODUCT CARD CUANDO ESTE YA HAYA LLEGADO A 0

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer(current => current - 1000);
            setMinutes(Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((timer % (1000 * 60)) / 1000));
        }, 1000);

        if (timer < 0) clearInterval(timeout);

        return () => clearInterval(timeout);
    }, [timer]);

    const handleClick = () => {
        navigate(`/products/${id}`);
    };


    return (
        <ProductCardStyles onClick={timer > 0 && handleClick} >
            <div className="product-card__image">
                <img src={image} alt="" />

            </div>
            <div className="product-card__detail">
                <p className="product-card__title">{title}</p>
                <p className="product-card__price">${price}</p>
            </div>
            <div>
                <p style={{ fontSize: '2rem' }}>{minutes < 10 ? `0${minutes}` : minutes}
                    :
                    {seconds < 10 ? `0${seconds}` : seconds}
                </p>
            </div>
        </ProductCardStyles>
    )
}
