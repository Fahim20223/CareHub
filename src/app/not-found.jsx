// "use client";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      <ShieldAlert size={100} className="text-pink-500 dark:text-green-500" />
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <Link href={"/"} className="btn bg-pink-500 text-white dark:bg-green-600">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
