"use client";
import React from "react";
import Header from "@/components/HeaderComponent/HeaderComponent";
import NavComponent from "@/components/NavComponents/NavComponent/NavComponent";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CodeSpace - Bakery</title>
        <meta content="CodeSpace - Bakery" />
        <link rel="icon" href="/assets/icons/donut-icon.png"></link>
      </Helmet>
      <Header />

      <NavComponent />
    </>
  );
}
