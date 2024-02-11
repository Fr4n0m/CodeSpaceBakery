import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@mui/joy";

const CreateDonut = () => {
  const initialValues = {
    name: "",
    flavor: "",
    price: "",
    imageUrl: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      const priceAsNumber = parseFloat(values.price);
      const flavorsArray = values.flavor
        .split(",")
        .map((flavor) => flavor.trim());

      const updatedValues = {
        ...values,
        flavor: flavorsArray,
        price: priceAsNumber,
      };

      const response = await fetch("http://localhost:4000/donuts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedValues),
      });

      if (response.ok) {
        console.log("Donut añadido exitosamente");
        resetForm();
      } else {
        console.error("Error al añadir el donut:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }

    console.log("Valores enviados:", updatedValues);
    resetForm();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.flavor) {
      errors.flavor = "El donut debe de tener algún sabor";
    } else if (!values.flavor.includes(",") && values.flavor.trim() !== "") {
      errors.flavor = "Los sabores deben estar separados por comas";
    }
    if (!values.price) {
      errors.price = "Necesitamos establecer un precio para el donut";
    } else if (isNaN(Number(values.price)) || Number(values.price) <= 0) {
      errors.price =
        "El precio tiene que ser un número y no puede ser 0 o menor";
    }
    if (values.imageFile) {
      const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
      const fileExtension = values.imageUrl.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        errors.imageUrl =
          "Por favor, sube un archivo de imagen válido (jpg, jpeg, png, gif)";
      }
    }
    return errors;
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-2xl text-[#ED6C02] font-bold mb-4">Crear Donut</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Nombre:
              </label>
              <Field
                type="text"
                name="name"
                className="border rounded-md px-3 py-2 w-full hover:border-[#ED6C02]"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Sabor:
              </label>
              <Field
                type="text"
                name="flavor"
                className="border rounded-md px-3 py-2 w-full hover:border-[#ED6C02]"
              />
              <ErrorMessage
                name="flavor"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Precio:
              </label>
              <Field
                type="text"
                name="price"
                className="border rounded-md px-3 py-2 w-full hover:border-[#ED6C02]"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Imagen:
              </label>
              <Field
                type="file"
                name="imageUrl"
                className="border rounded-md px-3 py-2 w-full focus:border-blue-500 hover:border-[#ED6C02]"
              />

              <ErrorMessage
                name="imageFile"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#ED6C02] text-white rounded-md px-4 py-2 hover:bg-[#c76412] hover:scale-95 transition duration-200 ease-in-out "
            >
              Create
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateDonut;
