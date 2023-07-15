import "./Header.css";
import Nav from "./nav/Nav";

const Header = ({ config, imSiracTivy }) => {
  return (
    <header>
      <Nav config={config} imSiracTivy={imSiracTivy} />
      {/* <nav>
        <div className="nav-item">
          <a href="#Home">
            {config.navConfig.home}
            {imSiracTivy}
          </a>
        </div>
        <div className="nav-item">
          <a href="#About">{config.navConfig.about}</a>
        </div>
        <div className="nav-item">
          <a href="#Contact">{config.navConfig.contact}</a>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
