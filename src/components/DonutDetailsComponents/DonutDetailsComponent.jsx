import Image from "next/image";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@mui/joy";

export default function DonutDetailsComponent({ donut }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDonut, setEditedDonut] = useState({ ...donut });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDonut(donut);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/donuts/${donut._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedDonut),
        }
      );
      if (!response.ok) {
        throw new Error("Error al guardar los cambios");
      }
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert("Error al guardar los cambios");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/donuts/${donut._id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Error al eliminar el donut");
      }
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el donut");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDonut((prevDonut) => ({
      ...prevDonut,
      [name]: value,
    }));
  };

  const flavors = Array.isArray(donut.flavor)
    ? donut.flavor.join(", ")
    : donut.flavor;

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="flex flex-col p-5 rounded-xl">
        <CardHeader
          shadow={false}
          floated={false}
          className="mt-0 h-96 shadow-inner"
        >
          <img
            src={donut.imageUrl}
            alt={donut.name}
            className="h-full w-full object-cover rounded-xl"
          />
        </CardHeader>
        <CardBody className="transition-all ease-in-out duration-300">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={editedDonut.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="price"
                value={editedDonut.price}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="flavor"
                value={editedDonut.flavor}
                onChange={handleInputChange}
              />
            </>
          ) : (
            <div className="mb-2 mt-5 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {donut.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {donut.price} €
              </Typography>
            </div>
          )}
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {flavors}
          </Typography>
        </CardBody>
        <CardFooter className="mt-5">
          {isEditing ? (
            <>
              <Button
                variant="outlined"
                onClick={handleSave}
                color={"success"}
                style={{ marginRight: "8px" }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color={"warning"}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                color="warning"
                onClick={handleEdit}
                style={{ marginRight: "8px" }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color={"warning"}
                onClick={handleDelete}
                style={{ color: "red" }}
              >
                Delete
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
