import styled from 'styled-components';

const ProductsPageStyles = styled.section`
    max-width: 140rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;

    @media only screen and (min-width: 57.5em) {
        padding: 8rem 1.5rem;
    }
`;

export default ProductsPageStyles;