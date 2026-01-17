"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <button
            onClick={() => signOut()}
            className="btn bg-pink-500 text-white dark:bg-green-500 dark:border-0 btn-sm rounded-lg text-xs sm:text-sm"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          href="/login"
          className="btn bg-pink-500 text-white dark:bg-green-500 dark:border-0 btn-sm rounded-lg text-xs sm:text-sm"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;
