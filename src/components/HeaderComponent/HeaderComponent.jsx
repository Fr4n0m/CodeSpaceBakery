import React from "react";
import DarkButtonComponent from "../ButtonComponents/DarkButtonComponent/DarkButtonComponent";
import Link from "next/link";
import Image from "next/image";
import ContactButton from "../ButtonComponents/ContactButtonComponent/ContactButton";

export default function HeaderComponent() {
  return (
    <div className="flex justify-between items-center p-10 h-1">
      <div>
        <Image
          src="/assets/images/logo.webp"
          alt="Logo"
          height={40}
          width={40}
          className="rounded-[50%]"
        />
      </div>

      <div>
        <Link href={"/"}>
          <h1 className="ml-[140px] font-bold drop-shadow-lg text-2xl hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
            CodeSpace BAKERY
          </h1>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-5">
        <DarkButtonComponent />
        <Link href="/contactPage/contact">
          <ContactButton />
        </Link>
      </div>
    </div>
  );
}
