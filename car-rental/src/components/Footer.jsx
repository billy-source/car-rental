
import { CarFront } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <CarFront size={22} />
          </span>
          <span className="font-bold text-slate-900">DriveEasy</span>
        </Link>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} DriveEasy Car Rentals. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm text-slate-600">
          <Link to="/cars" className="hover:text-blue-600">
            Browse Cars
          </Link>
          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;