"use client";

import { Grid2, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <Grid2
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10px"}
    >
      <Grid2 display={"flex"} flexDirection={"row"} gap={"30px"} padding={"10px"} sx={{background: "white", borderRadius: "20px"}}>
        <Link href={"/"}>
          <Typography color="black">List</Typography>
        </Link>
        <Link href={"/add"}>
          <Typography color="black">Add</Typography>
        </Link>
      </Grid2>
    </Grid2>
  );
}
