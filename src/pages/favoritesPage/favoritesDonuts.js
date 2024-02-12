import React from "react";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import Link from "next/link";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";
import FavoritesList from "@/components/DonutsListComponents/FavoritesListComponent";
import { Helmet } from "react-helmet";

export default function favoritesDonuts() {
  return (
    <>
      <Helmet>
        <title>CodeSpace - Bakery</title>
        <meta content="CodeSpace - Bakery" />
        <link rel="icon" href="/assets/icons/donut-icon.png"></link>
      </Helmet>

      <HeaderComponent />

      <BackButton />

      <FavoritesList />
    </>
  );
}
