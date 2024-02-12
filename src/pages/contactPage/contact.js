import React from "react";
import Header from "@/components/HeaderComponent/HeaderComponent";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";
import BakeryDetails from "@/components/BakeryDetailsComponent/BakeryDetailsComponent";
import { Helmet } from "react-helmet";

export default function contact() {
  return (
    <>
      <Helmet>
        <title>CodeSpace - Bakery</title>
        <meta content="CodeSpace - Bakery" />
        <link rel="icon" href="/assets/icons/donut-icon.png"></link>
      </Helmet>

      <Header />

      <BackButton />

      <BakeryDetails />
    </>
  );
}
