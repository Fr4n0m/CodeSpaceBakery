import React from "react";
import Header from "@/components/HeaderComponent/HeaderComponent";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";
import DonutList from "@/components/DonutsListComponents/DonutListComponent";
import CreateDonut from "@/components/CreateDonutComponent/CreateDonutComponent";

export default function createDonut() {
  return (
    <>
      <Header />

      <BackButton />

      <div className="grid justify-center items-center gap-4 h-screen">
        <CreateDonut />

        {/* <DonutList /> */}
      </div>
    </>
  );
}
