import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold">
            Kira
          </Link>

          <div className="ml-10 space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <SignedIn>
              <Link to="/dashboard" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
            </SignedIn>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in" className="text-gray-300 hover:text-white">
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="bg-white text-slate-800 px-4 py-2 rounded hover:bg-gray-200"
            >
              Sign Up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
