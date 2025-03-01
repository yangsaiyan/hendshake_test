"use client";
import Form from "@/components/form/Form";
import { Grid2 } from "@mui/material";

export default function Home() {
  return (
    <Grid2
      display={"flex"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Form />
    </Grid2>
  );
}
