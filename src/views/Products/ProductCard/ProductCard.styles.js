import styled from 'styled-components';

const ProductCardStyles = styled.div`
    background-color: #fff;
    border-radius: 0.8rem;
    width: 25rem;
    padding: 3rem 1.5rem;
    cursor: pointer;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
    transition: all .2s;
    

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;

    &:hover {
        transform: scale(1.02);
    }

    .product-card {
        &__image {
            width: 60%;
            align-self: center;

            & img {
                width: 100%;
            }
        }

        &__detail {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
        }

        &__title {
            background-color: #403659;
            border-radius: 0.2rem;
            color: #fff;
            font-size: 1.7rem;
            font-weight: 700;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding: 0 0.5rem;
        }

        &__price {
            color: #403659;
            font-size: 2.2rem;
            font-weight: 900;
        }

        
    }
`;

export default ProductCardStyles;