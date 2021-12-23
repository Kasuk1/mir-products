import { NavLink } from "react-router-dom"
import NavbarStyles from "./Navbar.styles"

export const Navbar = () => {
    return (
        <header style={{ backgroundColor: '#403659' }}>
            <NavbarStyles>
                <span className="navbar__logo">FakeStore</span>
                <ul className="navbar__list">
                    <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="/" >Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="products" >Products</NavLink></li>
                    <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="about" >About</NavLink></li>
                </ul>
            </NavbarStyles>
        </header>

    )
}
