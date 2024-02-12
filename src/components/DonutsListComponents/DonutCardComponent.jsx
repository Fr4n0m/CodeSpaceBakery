import HttpConnection, { op_all, op_detail } from "@/util/HttpConnection";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadComponent from "../LoadComponent/LoadComponent";
import FavoritesAddIcon from "../ButtonComponents/FavoritesAddIconComponent/FavoritesAddIconComponent";
import FavoritesFilledIcon from "../ButtonComponents/FavoritesAddIconComponent/FavoritesFilledIcon";
import Link from "next/link";

export default function DonutCard({ donutId }) {
  const [donutDetails, setDonutDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    HttpConnection(
      op_detail.replace(`:id`, donutId),
      (item) => {
        console.log(item);
        setDonutDetails(item.donut);
        setIsFavorite(item.isFavorite);
      },
      (error) => {}
    );
  }, [donutId]);

  const toggleFavorite = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/donuts/${donutId}/favorites`,
        {
          method: isFavorite ? "DELETE" : "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Error al agregar/eliminar de favoritos");
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error al agregar/eliminar de favoritos:", error);
    }
  };

  if (!donutDetails) {
    return <LoadComponent />;
  }

  const flavors = Array.isArray(donutDetails.flavor)
    ? donutDetails.flavor.join(", ")
    : donutDetails.flavor;

  return (
    <Card sx={{ width: 320 }} className="shadow-md shadow-[#FDF0E1]">
      <div>
        <Typography level="title-lg" className="font-bold text-[#0000008e]">
          {donutDetails.name}
        </Typography>
        <Typography level="body-xs">{flavors}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          onClick={toggleFavorite}
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          {isFavorite ? <FavoritesFilledIcon /> : <FavoritesAddIcon />}
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <Link href={`/donuts/${donutId}`}>
          <Image
            src={donutDetails.imageUrl}
            width={200}
            height={200}
            alt={donutDetails.name}
          />
        </Link>
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="md" className="font-bold">
            {donutDetails.price} €
          </Typography>
        </div>
        <div className="ml-[120px]">
          <Link href={`/donuts/${donutId}`}>
            <Button
              variant="outlined"
              size="md"
              color="warning"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
