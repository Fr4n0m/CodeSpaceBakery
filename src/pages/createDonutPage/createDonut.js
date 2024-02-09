import React from "react";
import HeaderComponent from "@/components/HeaderComponents/HeaderComponent";
import Link from "next/link";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";

export default function createDonut() {
  return (
    <>
      <HeaderComponent />

      <Link href="/">Back to home</Link>
    </>
  );
}
