import MenuItem from "./MenuItem";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
        depthLevel = depthLevel + 1;
        const dropdownClass = depthLevel > 1 ? "dropdowns-submenu" : "";
        return (
                <ul
                        className={`dropdowns ${dropdownClass} ${
                                dropdown ? "show" : ""
                        }`}
                >
                        {" "}
                        {submenus.map((submenu, index) => (
                                <MenuItem
                                        items={submenu}
                                        key={index}
                                        depthLevel={depthLevel}
                                />
                        ))}{" "}
                </ul>
        );
};

export default Dropdown;
