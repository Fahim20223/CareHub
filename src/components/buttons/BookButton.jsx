"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const BookButton = ({ service }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();
  const book = () => {
    if (isLogin) alert(service._id);
    else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <div>
      <button
        onClick={book}
        className="px-6 py-3 rounded-full bg-pink-500 dark:bg-green-500 text-white font-semibold shadow hover:scale-105 transition flex gap-1 items-center"
      >
        <FaCartPlus />
        Book Service
      </button>
    </div>
  );
};

export default BookButton;
