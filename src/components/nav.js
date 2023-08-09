import React from 'react';
import { Outlet, Link } from "react-router-dom";
import useCollapse from "react-collapsed";

function NavigationLink({ link }) {
  return (
    <li className="text-black hover:text-blue">
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
      name: "Music", 
      url: "/music" 
    },
    { 
      name: "Sculpture", 
      url: "/sculpture" 
    },
    {
      title: "Web Based",
      isCollapsible: true,
      links: [
        { 
          name: "Day Cycle", 
          url: "https://day-cycle.vercel.app/", 
          isExternal: true 
        },
        { 
          name: "Living Streams", 
          url: "https://living-streams.vercel.app/", 
          isExternal: true 
        },
        { 
          name: "TV Party", 
          url: "https://tv-party-719ff21bd2bc.herokuapp.com/", 
          isExternal: true 
        },
      ]
    },
    {
      title: "Software",
      isCollapsible: true,
      links: [
        { 
          name: "IMSYS", 
          url: "/imsys"
        },
        { 
          name: "Veil", 
          url: "/veil" 
        },
        { 
          name: "Triple Perc", 
          url: "/tripleperc" 
        },
        { 
          name: "RTLEARNER", 
          url: "/rtlearner" 
        },
        { 
          name: "Time Layer", 
          url: "/timelayer" 
        },
      ]
    },
    { 
      name: "Curating", 
      url: "/curating" 
    },
    { 
      name: "Systems", 
      url: "/systems" 
    },
    { 
      name: "github", 
      url: "https://github.com/tmartinez88", 
      isExternal: true 
    },
    { 
      name: "instagram", 
      url: "https://www.instagram.com/ogbabydiesal/", 
      isExternal: true 
    },
    { 
      name: "twitter", 
      url: "https://twitter.com/ogbabydiesal", 
      isExternal: true 
    },
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