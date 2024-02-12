import React, { useState, useEffect } from "react";
import DonutCard from "./DonutCardComponent";
import HttpConnection, { op_all } from "@/util/HttpConnection";

export default function DonutListComponent() {
  const [donutsList, setDonutsList] = useState([]);

  useEffect(() => {
    HttpConnection(
      op_all,
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
    <>
      <div className="flex justify-center items-center m-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[100%] gap-5 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10">
          {donutsList.map((donut, index) => (
            <DonutCard key={donut._id} donutId={donut._id} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
