"use client";
import { handleBooked } from "@/actions/server/booked";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const BookButton = ({ service }) => {
  const session = useSession();

  const router = useRouter();
  const path = usePathname();
  const isLogin = session?.status == "authenticated";
  const [isLoading, setIsLoading] = useState(false);

  const bookCart = async () => {
    setIsLoading(true);
    if (isLogin) {
      const result = await handleBooked({ service, inc: true });
      if (result.success) {
        Swal.fire("Added to the booked list", service?.name, "success");
      } else {
        Swal.fire("Opps", "Something Wrong Happened", "error");
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button
        disabled={session.status == "loading" || isLoading}
        onClick={bookCart}
        className="px-6 py-3 rounded-full bg-pink-500 dark:bg-green-500 text-white font-semibold shadow hover:scale-105 transition flex gap-1 items-center"
      >
        <FaCartPlus />
        Book Service
      </button>
    </div>
  );
};

export default BookButton;
