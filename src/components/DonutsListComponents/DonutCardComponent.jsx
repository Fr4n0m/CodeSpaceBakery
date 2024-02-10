import HttpConnection, { op_all, op_detail } from "@/util/HttpConnection";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadComponent from "../LoadComponent/LoadComponent";

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
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Yosemite National Park</Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
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
          <Typography fontSize="lg" fontWeight="lg">
            $2,900
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
