
import { Link, NavLink } from "react-router-dom";
import { CarFront, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <CarFront size={25} />
          </span>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            DriveEasy
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/cars" className={navLinkClass}>
            Browse Cars
          </NavLink>

          <NavLink to="/my-bookings" className={navLinkClass}>
            My Bookings
          </NavLink>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/cars" onClick={closeMenu} className={navLinkClass}>
              Browse Cars
            </NavLink>

            <NavLink
              to="/my-bookings"
              onClick={closeMenu}
              className={navLinkClass}
            >
              My Bookings
            </NavLink>

            <NavLink to="/login" onClick={closeMenu} className={navLinkClass}>
              Login
            </NavLink>

            <Link
              to="/register"
              onClick={closeMenu}
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;