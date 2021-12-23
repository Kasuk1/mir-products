import styled from 'styled-components';

const AboutPageStyles = styled.section`
    max-width: 140rem;
    color: #403659;
    padding: 4rem 1.5rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    @media only screen and (min-width: 57.5em) {
        padding: 8rem 1.5rem;

        flex-direction: row;
        gap: 8rem;
        align-items: flex-start;
    }

    .about {

        &__left {
            width: 25rem;
            height: 25rem;

            @media only screen and (min-width: 37.5em) {
                width: 45rem;
                height: 45rem;
            }
        }

        &__right {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        &__image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
        }

        &__group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            & > :last-child {
                margin-left: 1.5rem;
            }
        }

        &__title {
            color: #403659;
            font-size: 3.5rem;
            font-weight: 800;

            @media only screen and (min-width: 57.5em) {
                font-size: 4rem;
            }
        }

        &__subtitle {
            background-color: #403659;
            border-radius: 0.2rem;
            color: #fff;
            font-size: 1.4rem;
            padding: 0 0.5rem;
            margin-bottom: 0.5rem;
        }

        &__text {
            font-size: 2.2rem;
            font-weight:300;
        }

        &__tag {
            background-color: #605678;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 500;
            padding: 0 0.5rem;
        }

        &__social-network {
            display: flex;
            gap: 1.2rem;
        }

        &__icon {
            color: #605678;
            font-size: 4.5rem;
        }
    }
`;

export default AboutPageStyles;