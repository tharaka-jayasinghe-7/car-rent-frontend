import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-white shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Luxury R
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Cars
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" class="hover:underline">
              Tharaka Jayasinghe
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
