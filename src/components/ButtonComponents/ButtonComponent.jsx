import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ButtonComponent({ text }) {
  return (
    <>
      <Button variant="outlined">{text}</Button>
    </>
  );
}
