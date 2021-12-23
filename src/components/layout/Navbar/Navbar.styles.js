import styled from 'styled-components';

const NavbarStyles = styled.nav`
    max-width: 140rem;
    color: #fff;
    font-size: 1.8rem;
    padding: 1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
            gap: 8rem;
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