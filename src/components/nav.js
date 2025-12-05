import { Outlet, Link } from "react-router-dom";
import useCollapse from "react-collapsed";

function NavigationLink({ link }) {
  return (
    <li>
      {link.isExternal ? (
        <a target="_blank" rel="noreferrer" href={link.url}>{link.name}</a>
      ) : (
        <Link to={link.url}>{link.name}</Link>
      )}
    </li>
  );
}

function CollapseSection({ section }) {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <li className="collapsible">
      <div {...getToggleProps()}>{section.title}</div>
      <ul className="text-base lg:text-lg pl-4" {...getCollapseProps()}>
        {section.links.map((link, index) => (
            <NavigationLink key={index} link={link} />
        ))}
      </ul>
    </li>
  );
}

const Navlinks = () => {
  const links = [
    { 
      name: "Welcome", 
      url: "/" 
    },
    { 
      name: "Work", 
      url: "/work" 
    },
    { 
      name: "Learning", 
      url: "/learning" 
    },
    { 
      name: "Systems", 
      url: "/systems" 
    },
    {
      name: "Connect",
      url: "/connect"
    }
  ];

  return (
    <>
      {/* calc function measures the height of the viewport and subtracts the height of vertical padding (2x) on desktop */}
      <ul className="wrapper bg-gray font-display uppercase leading-tight text-2xl lg:text-5xl lg:max-h-[calc(100vh-theme(space.12))]">
        {links.map((link, index) => (
          link.isCollapsible ? (
            <CollapseSection key={index} section={link} />
          ) : (
            <NavigationLink key={index} link={link} />
          )
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Navlinks;