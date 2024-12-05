import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import { useState, useEffect } from "react";

const initialNavigation = [
  { name: "Home", href: "/", current: false },
  { name: "Cars", href: "/cars", current: false },
  { name: "Bookings", href: "/bookings", current: false },
  { name: "Profile", href: "/profile", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navigationState, setNavigationState] = useState(initialNavigation);
  const location = useLocation(); // Get current location from react-router-dom

  // Update the current state based on the URL path
  useEffect(() => {
    const updatedNavigation = navigationState.map((item) =>
      item.href === location.pathname
        ? { ...item, current: true }
        : { ...item, current: false }
    );
    setNavigationState(updatedNavigation);
  }, [location]); // Only re-run when location changes

  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationState.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href} // Use Link from react-router-dom to handle routing
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Logout button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="px-4 py-2 text-white bg-white text-black rounded-md hover:text-red-500"
              onClick={() => alert("Logging out...")} // Handle logout functionality
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
