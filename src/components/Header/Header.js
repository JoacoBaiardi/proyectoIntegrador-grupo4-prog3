import { Link } from "react-router-dom"
const Header = () => {
    return (
        <nav>
            <ul className="user">
                <li>ACA VA EL LOGO O NOMBRE <img src="./img/user.jpg" alt="" /></li>
            </ul>

            <ul className="main-nav">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/favoritos">Favoritos</Link></li>
                <li><Link to = "/">Seccion 1</Link></li>
                <li><Link to = "/">Seccion 2</Link></li>
            </ul>
        </nav>
    )
}

export default Header

