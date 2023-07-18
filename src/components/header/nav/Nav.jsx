import { useState } from "react";
import NavItem from "./nav-item/NavItem";

const Nav = ({ config, imSiracTivy }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav>
      {config.navConfig.map(({ title, id }) => {
        return (
          <NavItem
            title={title}
            key={id}
            id={id}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />

          // <div className="nav-item" key={id}>
          //   <a href={title}>{title}</a>
          // </div>
        );
      })}
    </nav>
  );
};

export default Nav;
