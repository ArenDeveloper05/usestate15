import "./Header.css";
import Nav from "./nav/Nav";

const Header = ({ config, imSiracTivy }) => {
  return (
    <header>
      <Nav config={config} imSiracTivy={imSiracTivy} />
    </header>
  );
};

export default Header;
