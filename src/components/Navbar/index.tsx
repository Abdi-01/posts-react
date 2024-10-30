import Link from "next/link";
import * as React from "react";
import { FaSearch } from "react-icons/fa";

interface INavbarProps { }

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className="flex items-center justify-between px-24 py-5">
      <Link href="/" className="text-3xl font-bold">P</Link>
      <ul className="flex items-center gap-5">
        <li>
          <div className="relative">
            <span className="absolute top-2.5 left-2">
              <FaSearch color="gray" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="border w-28 px-3 py-1 rounded-full pl-8"
            />
          </div>
        </li>
        <li>
          <select className="bg-transparent">
            <option value="en">English (United State)</option>
            <option value="id">Indonesia</option>
          </select>
        </li>
        <li className="flex gap-2">
          <Link
            href="/sign-up"
            className="bg-slate-200 text-slate-700 px-3 py-1 rounded-md shadow"
          >
            Sign Up
          </Link>
          <Link
            href="/sign-in"
            className="bg-slate-700 text-white px-3 py-1 rounded-md shadow"
          >
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
