import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="header">
            <ul className="user">
                <li><Link to="/"><img src="./img/pelaFlix.png" alt="PelaFlix" height="50px"/></Link></li>
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

