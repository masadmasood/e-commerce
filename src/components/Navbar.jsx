import React, { useState, useEffect, useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavbarLinks = ({ navLinks }) => (
  <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {navLinks.map((item, index) => (
      <Typography
        key={index}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={item.path} className="flex items-center">
          {item.link.toUpperCase()}
        </NavLink>
      </Typography>
    ))}
  </ul>
);

const ActionIcons = ({ handleOpen, isAuthenticated }) => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProfileMenu = () => {
    if (isAuthenticated) {
      setOpenProfileMenu(!openProfileMenu);
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  };

  const cartCount = getCartCount();

  return (
    <>
      <IconButton variant="text" className="icon-button" onClick={handleOpen}>
        <img src={assets.search_icon} alt="search" className="w-5" />
      </IconButton>

      <Menu open={openProfileMenu} handler={handleProfileMenu}>
        <MenuHandler>
          <IconButton
            variant="text"
            className="icon-button"
            onClick={handleProfileMenu}
          >
            <img src={assets.profile_icon} alt="user" className="w-5" />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <NavLink to="#">Profile</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="#">Settings</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="#">Logout</NavLink>
          </MenuItem>
        </MenuList>
      </Menu>

      <Badge
        withBorder
        content={cartCount}
        overlap="circular"
        placement="bottom-end"
        className="bg-black text-white !w-2.5 !h-2.5 flex items-center justify-center !text-[10px]"
      >
        <IconButton variant="text" className="icon-button">
          <img src={assets.cart_icon} alt="cart" className="w-5" />
        </IconButton>
      </Badge>
    </>
  );
};

export default function Navigation() {
  const { setShowSearch, isAuthenticated } = useContext(ShopContext);
  const [openNav, setOpenNav] = useState(false);
  const handleOpen = () => setShowSearch(true);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navLinks = [
    { path: "/", link: "home" },
    { path: "/about", link: "about" },
    { path: "/collection", link: "collection" },
    { path: "/contact", link: "contact" },
  ];

  return (
    <>
      <div className="max-h-[768px] w-full max-w-full">
        <Navbar className="sticky top-0 z-10 h-max container mx-auto rounded-none px-4 py-3 lg:px-8 lg:py-4 shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="/"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <img src={assets.logo} alt="forever-logo" className="w-28" />
            </Typography>

            <div className="mr-4 hidden lg:block">
              <NavbarLinks navLinks={navLinks} />
            </div>

            <div className="flex items-center">
              <ActionIcons
                handleOpen={handleOpen}
                isAuthenticated={isAuthenticated}
              />
              <IconButton
                variant="text"
                className="lg:hidden icon-button"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
              </IconButton>
            </div>
          </div>

          <Collapse open={openNav}>
            <NavbarLinks navLinks={navLinks} />
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}
