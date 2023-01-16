import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/logoflix.png'

function Header() {
    return (
        <header>
            <Link className="logo" to="/"> <img src={Logo} alt= "Logo com o nome MovieFlix com a imagem de  de cinema e um balde de pipoca"/> </Link>
            <Link className="favoritos" to="/favoritos"> Meus filmes</Link>
        </header>
    );
}

export default Header;