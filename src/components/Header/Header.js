import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <ul className="user">
                <li>ACA VA EL LOGO O NOMBRE <img src="./img/user.jpg" alt="" /></li>
            </ul>

            

            <ul className="main-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/populares">Populares</Link></li>
                <li><Link to="/upcoming">Upcoming</Link></li>
            </ul>
        </nav>
    )
}

export default Header

