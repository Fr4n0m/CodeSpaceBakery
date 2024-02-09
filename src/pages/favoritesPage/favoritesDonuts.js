import React from "react";
import HeaderComponent from "@/components/HeaderComponents/HeaderComponent";
import Link from "next/link";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";

export default function favoritesDonuts() {
  return (
    <>
      <HeaderComponent />

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
