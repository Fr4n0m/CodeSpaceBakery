import React, { useState, useEffect } from "react";
import DonutCard from "./DonutCardComponent";
import HttpConnection, { op_favorites } from "@/util/HttpConnection";

const FavoritesListComponent = () => {
  const [donutsList, setDonutsList] = useState([]);

  useEffect(() => {
    HttpConnection(
      op_favorites,
      (item) => {
        console.log(item);
        setDonutsList(item.data);
      },
      (error) => {
        alert("Error al cargar los donuts");
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[100%] gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {donutsList.map((donut, index) => (
          <DonutCard key={donut._id} donutId={donut._id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesListComponent;
