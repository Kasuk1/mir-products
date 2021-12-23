import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AboutPageStyles from './AboutPage.styles';
import ImgProfile from '../../../assets/images/img-profile.jpg';

library.add(fab)

export const AboutPage = () => {
    return (
        <AboutPageStyles>
            <div className="about__left">
                <img className="about__image" src={ImgProfile} alt='' />
            </div>
            <div className="about__right">
                <h2 className="about__title">Información personal</h2>
                <div className="about__group">
                    <h3 className="about__subtitle">Nombre</h3>
                    <p className="about__text">Igor Chinchay Farroñay</p>
                </div>
                <div className="about__group">
                    <h3 className="about__subtitle">Descripción</h3>
                    <p className="about__text">Ingeniero de Sistemas y Computación de Perú</p>
                </div>

                <div className="about__group">
                    <h3 className="about__subtitle">3 cosas que aprendiste en el programa</h3>
                    <p><span className="about__tag">#Git</span>, <span className="about__tag">#Scrum</span>, <span className="about__tag">#Node</span></p>
                </div>
                <div className="about__group">
                    <h3 className="about__subtitle">Correo</h3>
                    <p className="about__text">igor2008_11@hotmail.com</p>
                </div>
                <div className="about__group">
                    <h3 className="about__subtitle">Redes Sociales</h3>
                    <div className="about__social-network">
                        <a href='https://github.com/Kasuk1' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='about__icon' icon={['fab', 'github-square']} />
                        </a>
                        <a href='https://www.facebook.com/IgorPRI1/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='about__icon' icon={['fab', 'facebook']} />
                        </a>
                        <a href='https://www.linkedin.com/in/igorcf/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='about__icon' icon={['fab', 'linkedin']} />
                        </a>
                    </div>
                </div>
            </div>
        </AboutPageStyles>
    )
}
