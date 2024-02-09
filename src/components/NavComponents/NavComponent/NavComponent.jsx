import React from "react";
import ActionAreaCard from "../NavCardComponent/NavCard";
import Link from "next/link";

export default function NavComponent() {
  return (
    <div className="grid justify-center items-center h-screen">
      <div className="flex-col-1 justify-center gap-10 xl:flex lg:flex">
        <div>
          <Link href="/createDonutPage/createDonut">
            <ActionAreaCard
              text={"Add a new donut"}
              img={"/assets/images/customize_donut.webp"}
            />
          </Link>
        </div>

        <div>
          <Link href="/donutsListPage/donutsList">
            <ActionAreaCard
              text={"Donuts"}
              img={"/assets/images/donuts.webp"}
            />
          </Link>
        </div>

        <div>
          <Link href="/favoritesPage/favoritesDonuts">
            <ActionAreaCard
              text={"Favorites"}
              img={"/assets/images/favorites.webp"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
