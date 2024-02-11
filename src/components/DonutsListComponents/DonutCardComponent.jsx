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

export default function DonutCard({ donutId }) {
  const [donutDetails, setDonutDetails] = useState(null);

  useEffect(() => {
    HttpConnection(
      op_detail.replace(`:id`, donutId),
      (item) => {
        console.log(item);
        setDonutDetails(item.donut);
      },
      (error) => {}
    );
  }, [donutId]);

  if (!donutDetails) {
    return <LoadComponent />;
  }
  return (
    <Card sx={{ width: 320 }} className="shadow-md shadow-[#FDF0E1]">
      <div>
        <Typography level="title-lg" className="font-bold text-[#0000008e]">
          {donutDetails.name}
        </Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <FavoritesAddIcon />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <Image
          src={donutDetails.imageUrl}
          width={200}
          height={200}
          alt={donutDetails.name}
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="md" className="font-bold">
            {donutDetails.price}
          </Typography>
        </div>
        <Button
          variant="outlined"
          size="md"
          color="warning"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
