import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          alt="logo-CareHub"
          src={"/assets/logo.png"}
          width={50}
          height={40}
        ></Image>
        <h2 className="text-xl font-bold">
          Care<span className="text-secondary">Hub</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
