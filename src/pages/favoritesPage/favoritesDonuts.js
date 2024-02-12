import React from "react";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import Link from "next/link";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";
import FavoritesList from "@/components/DonutsListComponents/FavoritesListComponent";

export default function favoritesDonuts() {
  return (
    <>
      <HeaderComponent />

      <BackButton />

      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Lista de Favoritos</h1>
        <FavoritesList />
      </div>
    </>
  );
}
