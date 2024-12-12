import { Disclosure } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const initialNavigation = [
  { name: "Home", href: "/loggedInHome", current: false },
  { name: "Cars", href: "/cars", current: false },
  { name: "Bookings", href: "/bookings", current: false },
  { name: "Profile", href: "/profile", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navigationState, setNavigationState] = useState(initialNavigation);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updatedNavigation = navigationState.map((item) =>
      item.href === location.pathname
        ? { ...item, current: true }
        : { ...item, current: false }
    );
    setNavigationState(updatedNavigation);
  }, [location]);

  const handleLogout = () => {
    const isSure = window.confirm("Are you sure you want to log out?");
    if (isSure) {
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("userData");

      navigate("/");
    } else {
      console.log("Logout canceled.");
    }
  };

  return (
    <Disclosure as="nav" className="bg-sky-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Luxury R
            </span>
          </a>
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationState.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-sky-600 text-white"
                        : "text-white hover:bg-sky-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="px-4 py-2 text-white bg-sky-800 text-black rounded-md hover:text-gray-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
