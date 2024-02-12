import React from "react";
import Header from "@/components/HeaderComponent/HeaderComponent";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";
import BakeryDetails from "@/components/BakeryDetailsComponent/BakeryDetailsComponent";

export default function contact() {
  return (
    <>
      <Header />

      <BackButton />

      <BakeryDetails />
    </>
  );
}
