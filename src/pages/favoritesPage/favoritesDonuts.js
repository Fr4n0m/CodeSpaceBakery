import React from "react";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import Link from "next/link";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";

export default function favoritesDonuts() {
  return (
    <>
      <HeaderComponent />

      <BackButton />
    </>
  );
}
