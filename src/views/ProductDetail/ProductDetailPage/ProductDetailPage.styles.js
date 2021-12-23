import styled from 'styled-components';

const ProductDetailPageStyles = styled.article`
    max-width: 140rem;
    margin: 0 auto;
    padding: 6rem 1.5rem;
    color: #403659;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3rem;

    @media only screen and (min-width: 57.5em) {
        flex-direction: row;
    }

    .product {
        &__left {
            background-color: #fff;
            padding: 2.5rem 3.5rem;
            border-radius: 1.2rem;
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;

            @media only screen and (min-width: 57.5em) {
                width: 40%;
            }

            & img {
                width: 100%;
            }
        }

        &__right {
            font-size: 1.6rem;
            font-weight: 300;
            width: 100%;

            @media only screen and (min-width: 57.5em) {
                width: 50%;
            }

            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        &__group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.8rem;

            & > :last-child {
                margin-left: 1.5rem;
            }
        }

        &__title {
            color: #403659;
            font-size: 2.2rem;
            font-weight: 700;
        }

        &__subtitle {
            background-color: #403659;
            border-radius: 0.2rem;
            color: #fff;
            font-size: 1.4rem;
            padding: 0 0.5rem;
            margin-bottom: 0.5rem;
        }

        &__description {
            font-size: 1.8rem;
        }

        &__category {
            background-color: #605678;
            color: #fff;
            font-weight: 500;
            padding: 0 0.5rem;
        }

        &__price {
            font-size: 3.5rem;
            font-weight: 800;
        }

        &__rating {
            font-size: 3rem;
            font-weight: 800;
        }
    }
`;

export default ProductDetailPageStyles;