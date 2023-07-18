const NavItem = ({ title, id, setActiveItem, activeItem }) => {
  return (
    <div
      className="nav-item"
      style={{ border: id === activeItem ? "solid 8px red" : "solid" }}
      onClick={() => {
        console.log(id);
        setActiveItem(id);
      }}
    >
      <a href={title}>{title}</a>
    </div>
  );
};

export default NavItem;
