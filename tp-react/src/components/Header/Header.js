import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
<>
    <nav>
        <ul className="main-nav">
            <NavBar link="/" elemento="Home" />
            <NavBar link="/favorites" elemento="Favoritos" />
            <NavBar link="/viewall/popular" elemento="Populares" />
            <NavBar link="/viewall/upComing" elemento="Estrenos" />
        </ul>

        <img  src="" alt="imagen" />
    </nav>
</>
  );
};

export default Header;
