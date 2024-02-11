import React from "react";
import Header from "@/components/HeaderComponent/HeaderComponent";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import DonutList from "@/components/DonutsListComponents/DonutListComponent";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";

export default function donutsList() {
  return (
    <>
      <Header />

      <BackButton />

      <DonutList />
    </>
  );
}
