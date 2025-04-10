import "./NavBar.css";

const NavBar = (props) => {
  const { elemento, link } = props;
  return (
    <li>
      <a className="textoNavBar" href={`${link}`}>
        {elemento}
      </a>
    </li>
  );
};

export default NavBar;
