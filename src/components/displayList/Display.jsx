"use client";
import { Button, Grid2, Typography } from "@mui/material";
import { getToDoList, removeToDoList } from "../../../hooks/localStorage";
import { useEffect, useState } from "react";

export default function Display() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    setToDoList(getToDoList() || []);
  }, []);

  const removeItem = (item) => {
    removeToDoList(item);
    setToDoList(getToDoList() || []);
  };

  return (
    <Grid2
      display={"flex"}
      flexDirection={"column"}
      gap={"50px"}
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
    >
      <Typography>Count: {toDoList?.length}</Typography>
      {toDoList?.map((item) => {
        return (
          <Grid2
            sx={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              width: "50%",
            }}
          >
            <Typography color="black">{item?.Activity}</Typography>
            <Typography color="black">{item?.Price}</Typography>
            <Typography color="black">{item?.Type}</Typography>
            <Typography color="black">{item?.Booking ? "True" : "False"}</Typography>
            <Typography color="black">{item?.Accessibility}</Typography>
            <Button
              onClick={() => {
                removeItem(item);
              }}
            >
              Remove
            </Button>
          </Grid2>
        );
      })}
    </Grid2>
  );
}
