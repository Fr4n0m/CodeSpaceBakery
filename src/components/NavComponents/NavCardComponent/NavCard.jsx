import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ text, img }) {
  const getDetails = () => {
    let details = "";
    switch (text) {
      case "Add a new donut":
        details =
          "🥳 Personalize your Donut: Do you have a unique idea in mind? Make it a reality with our donut customization option! Select your favorite flavor.";
        break;
      case "Donuts":
        details =
          "🍩 From the traditional glazed donut to innovative flavor combinations, our reinvented classics offer a unique taste experience.";
        break;
      case "Favorites":
        details =
          "🌟 Do you want to take a look at your favorites? Here you have your selected favorites donuts. Do you want to remove one of them? No problem ;)";
        break;
      default:
        break;
    }
    return details;
  };

  return (
    <Card className="max-w-[400px]">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          className="max-h-[180px]"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="font-bold"
          >
            {text}
          </Typography>
          <Typography color="text.secondary">{getDetails()}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
