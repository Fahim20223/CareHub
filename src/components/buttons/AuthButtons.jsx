"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

//{session.status == "authenticated"
const AuthButtons = () => {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await Swal.fire({
      title: "Logged out!",
      text: "You have been successfully logged out",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });

    signOut();
  };

  return (
    <div className="flex gap-2 items-center">
      {status == "authenticated" ? (
        <>
          <Image
            src={session?.user?.image || "/avatar.png"}
            alt="User"
            width={40}
            height={35}
            className="rounded-full object-cover border aspect-square"
          />

          <button
            // onClick={() => signOut()}
            onClick={handleLogout}
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
