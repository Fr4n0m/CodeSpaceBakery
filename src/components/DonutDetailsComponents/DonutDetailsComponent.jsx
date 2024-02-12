import Image from "next/image";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function DonutDetailsComponent({ donut }) {
  const flavors = Array.isArray(donut.flavor)
    ? donut.flavor.join(", ")
    : donut.flavor;

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="flex flex-col p-5 rounded-xl">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={donut.imageUrl}
              alt={donut.name}
              className="h-full w-full object-cover rounded-xl"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 mt-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {donut.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {donut.price} €
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {flavors}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
