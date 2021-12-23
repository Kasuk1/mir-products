import styled from 'styled-components';

const NavbarStyles = styled.nav`
    max-width: 140rem;
    color: #fff;
    font-size: 1.8rem;
    padding: 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media only screen and (min-width: 37.5em) {
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar {

        &__logo {
            background-color: #fff;
            border-radius: 2rem;
            color: #403659;
            font-size: 2rem;
            font-weight: 900;
            text-transform: uppercase;
            padding: 0.15rem 1rem;
        }

        &__list {
            display: flex;
            gap: 5rem;

            @media only screen and (min-width: 37.5em) {
                gap: 8rem;
            }
        }

        &__item {
            color: #fff;

            &.active {
                text-decoration: underline;
            }
        }
    }
`;

export default NavbarStyles;