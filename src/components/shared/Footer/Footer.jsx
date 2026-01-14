// components/Footer.jsx
import Image from "next/image";
import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
       border-t border-gray-500
      bg-linear-to-b 
      from-gray-50 to-gray-100 
      dark:from-gray-950 dark:to-gray-900 
      text-gray-700 
      dark:text-gray-300 
      relative overflow-hidden
      transition-colors duration-300
    "
    >
      {/* Decorative blobs - subtle in both modes */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-12 right-12 w-64 h-64 bg-pink-500 rounded-full blur-3xl dark:bg-pink-600"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand / About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🧸</span>
              <h2
                className="
                text-3xl font-bold 
                text-gray-900 
                dark:text-white
              "
              >
                CareHub
              </h2>
            </div>

            <p
              className="
              leading-relaxed max-w-xs text-sm
              text-gray-600 
              dark:text-gray-400
            "
            >
              CareHub is a platform where both kids & elders can trust. We care
              about you & your families health & there future.
            </p>

            <div className="flex items-center gap-5 text-xl">
              <a
                className="
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors duration-200
              "
              >
                <FaFacebookF />
              </a>
              <a
                className="
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors duration-200
              "
              >
                <FaTwitter />
              </a>
              <a
                className="
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors duration-200
              "
              >
                <FaPinterestP />
              </a>
              <a
                className="
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors duration-200
              "
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Details Info */}
          <div>
            <h3
              className="
              text-lg font-semibold mb-6 relative inline-block
              text-gray-900 
              dark:text-white
            "
            >
              Details Info
              <span
                className="
                absolute -bottom-2 left-0 h-1 w-12 rounded-full
                bg-blue-500 
                dark:bg-blue-400
              "
              ></span>
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Online Class",
                "Appointment",
                "About Us",
                "Our Team",
                "Upcoming Events",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      hover:text-blue-600 dark:hover:text-blue-400 
                      transition-all duration-200 hover:translate-x-2 inline-block
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News Feed */}
          <div>
            <h3
              className="
              text-lg font-semibold mb-6 relative inline-block
              text-gray-900 
              dark:text-white
            "
            >
              News Feed
              <span
                className="
                absolute -bottom-2 left-0 h-1 w-12 rounded-full
                bg-blue-500 
                dark:bg-blue-400
              "
              ></span>
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: "What can tracks teach kids Preschool",
                  date: "08 January 2022",
                  img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=150",
                },
                {
                  title: "How To Keep Children Safe Online",
                  date: "08 January 2022",
                  img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=150",
                },
              ].map((news, idx) => (
                <div key={idx} className="flex gap-4">
                  <Image
                    width={64}
                    height={64}
                    src={news.img}
                    alt="news"
                    className="w-16 h-16 object-cover rounded-lg shrink-0"
                  />
                  <div>
                    <p
                      className="
                      font-medium leading-tight text-sm
                      text-gray-800 
                      dark:text-gray-200
                    "
                    >
                      {news.title}
                    </p>
                    <time
                      className="
                      text-xs mt-1 block
                      text-gray-500 
                      dark:text-gray-500
                    "
                    >
                      {news.date}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3
              className="
              text-lg font-semibold mb-6 relative inline-block
              text-gray-900 
              dark:text-white
            "
            >
              Contact Us
              <span
                className="
                absolute -bottom-2 left-0 h-1 w-12 rounded-full
                bg-blue-500 
                dark:bg-blue-400
              "
              ></span>
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="
                  text-blue-600 dark:text-blue-400 
                  mt-1 shrink-0 text-lg
                "
                />
                <span className="dark:text-gray-300">
                  256 Lonely Street Ave, Brooklyn CA, United State
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope
                  className="
                  text-blue-600 dark:text-blue-400 
                  shrink-0 text-lg
                "
                />
                <span className="dark:text-gray-300">
                  info@kniripseteam.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt
                  className="
                  text-blue-600 dark:text-blue-400 
                  shrink-0 text-lg
                "
                />
                <span className="dark:text-gray-300">+256 (3156) 2156 236</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className="
          mt-16 pt-10 border-t text-center text-sm
          border-gray-200 
          dark:border-gray-800
          text-gray-500 
          dark:text-gray-500
        "
        >
          Copyright © {new Date().getFullYear()} CareHub. All Rights Reserved by
          Fahim
        </div>
      </div>
    </footer>
  );
}
