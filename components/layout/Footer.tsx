import React from "react";
import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="pt-8 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <nav aria-label="Footer Navigation - Support">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </nav>
          <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <CiFacebook size={30} />
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <AiOutlineInstagram size={30} />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <AiOutlineTwitter size={30} />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>

                <AiOutlineGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
