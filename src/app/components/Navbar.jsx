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
    <nav
      className={`z-10 min-h-fit bg-transparent flex ${
        openMenu && "flex-col-reverse"
      } text-end md:items-center justify-end`}
    >
      <div
        className={`${
          openMenu ? "flex border-2 border-textPurple rounded-lg scale-100 transition-transform duration-1000 ease-in" : "hidden"
        } md:flex md:flex-row flex-col items-center gap-4 p-5 `}
      >
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

      <span className="flex md:hidden justify-end p-4">
        {!openMenu ? (
          <RxHamburgerMenu
            className="text-white block cursor-pointer md:hidden"
            size="30px"
            onClick={mobileview}
          />
        ) : (
          <IoClose
            className="text-white cursor-pointer md:hidden block"
            size="30px"
            onClick={mobileview}
          />
        )}
      </span>
    </nav>
  );
};

export default Navbar;
