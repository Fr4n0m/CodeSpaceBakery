import React from "react";
import Header from "@/components/HeaderComponent/HeaderComponent";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import DonutList from "@/components/DonutsListComponents/DonutListComponent";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";
import { Helmet } from "react-helmet";

export default function donutsList() {
  return (
    <>
      <Helmet>
        <title>CodeSpace - Bakery</title>
        <meta content="CodeSpace - Bakery" />
        <link rel="icon" href="/assets/icons/donut-icon.png"></link>
      </Helmet>
      <Header />

      <BackButton />

      <DonutList />
    </>
  );
}
