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
        <NavBar link="/viewall/now_playing" elemento="En cartelera" />
        </ul>
        <img className="imagen" src="/Images/green.png" alt="" />
    </nav>
    </>
  );
};

export default Header;
