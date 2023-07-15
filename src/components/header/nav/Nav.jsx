const Nav = ({ config, imSiracTivy }) => {
  return (
    <nav>
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
    </nav>
  );
};

export default Nav;
