import { useEffect, useRef } from "react";
import navbarEffect from "../utils/navbarEffect";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const menuButton = useRef<HTMLButtonElement | null>(null);
  const navbarLinkClass = ({ isActive }: { isActive: boolean }) =>
    "pb-0.5 hover:text-primary/80 transition-all duration-100" +
    (isActive && " border-b-2 border-primary/50");
  const NavLinks = () => (
    <>
      <NavLink
        to="/"
        className={navbarLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/about-us"
        className={navbarLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        <li>About Us</li>
      </NavLink>
      <NavLink
        to="/about-team"
        className={navbarLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        <li>Our Team</li>
      </NavLink>
      <NavLink
        to="/showcase"
        className={navbarLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        <li>Showcase</li>
      </NavLink>
      <NavLink
        to="/events"
        className={navbarLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        <li>Events</li>
      </NavLink>
      <NavLink
        to="/gallery"
        className={navbarLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        <li>Gallery</li>
      </NavLink>
      <NavLink
        to="/contact-us"
        className={navbarLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        <li>Contact Us</li>
      </NavLink>
    </>
  );

  useEffect(() => {
    navbarEffect();
  }, []);

  return (
    <>
      <nav
        className={
          "w-full _navbar bg-neutral z-50 py-6 md:py-8 transition-all duration-100 border-b-2 border-transparent" +
          (openMenu ? " h-[100vh] fixed top-0 left-0" : " sticky top-0 left-0")
        }
      >
        <div className="px-4 w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="_left">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Qaseeda"
                className="max-h-[35px] md:w-[120px] text-3xl font-medium object-cover"
              />
            </Link>
          </div>
          <div className="_right flex items-center">
            <ul className="hidden lg:flex text-md font-medium space-x-8">
              <NavLinks />
            </ul>
            <button
              ref={menuButton}
              className={
                "lg:hidden p-2 rounded-full hover:bg-primary/20 active:scale-90 active:bg-primary/25" +
                (openMenu && " bg-primary/20")
              }
              onClick={() => setOpenMenu(!openMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:hidden w-full h-[80%]" hidden={!openMenu}>
          <div className="mt-4 px-5 w-full h-full max-w-7xl mx-auto">
            <ul className="flex flex-col w-full h-full gap-4 text-xl md:text-3xl justify-center items-center font-medium">
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
