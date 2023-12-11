"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggle, setToggle] = useState(false);

  const mobileview = () => {
    setOpenMenu(!openMenu);
    setToggle(!toggle);
  };

  const navLinks = [
    {
      id: 1,
      href: "./",
      text: "Home",
    },
    {
      id: 2,
      href: "#about",
      text: "About",
    },
    {
      id: 3,
      href: "#skills",
      text: "Skills",
    },
    {
      id: 4,
      href: "#my-works",
      text: "My Works",
    },
    {
      id: 5,
      href: "#contact",
      text: "Contact",
    },
  ];

  return (
    <nav className="z-10 h-[100px] bg-transparent flex items-center justify-end">
      <div className="hidden md:flex flex-row items-center gap-4 justify-evenly p-5 ">
        {navLinks.map((links) => (
          <a
            key={links.id}
            className="text-white text-sm sm:text-base font-semibold cursor-pointer"
            href={links.href}
          >
            {links.text}
          </a>
        ))}
      </div>

      <span>
        {!openMenu ? (
          <RxHamburgerMenu
            className="text-white cursor-pointer md:hidden flex"
            size="30px"
            onClick={mobileview}
          />
        ) : (
          <IoClose
            className="text-white cursor-pointer md:hidden flex"
            size="30px"
            onClick={mobileview}
          />
        )}
      </span>
    </nav>
  );
};

export default Navbar;
