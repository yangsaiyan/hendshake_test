"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { StyledCheckboxLabel, StyledTextField } from "./styles";
import { storeToDoList } from "../../../hooks/localStorage";

export default function Form() {
  const [formData, setFormData] = useState({
    Activity: "",
    Price: 0,
    Type: "",
    Booking: false,
    Accessibility: 0,
  });
  const [isDraft, setIsDraft] = useState(false);

  useEffect(() => {
    const draft = localStorage.getItem("DRAFT");
    console.log(draft);
    if (draft) {
      setFormData(JSON.parse(draft));
    }
  }, []);

  useEffect(() => {
    if (isDraft) localStorage.setItem("DRAFT", JSON.stringify(formData));
  }, [formData]);

  const handleActivityChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      Activity: e?.target?.value,
    }));
    setIsDraft(true);
  };

  const handlePriceChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      Price: e?.target?.value,
    }));
    setIsDraft(true);
  };

  const handleTypeChange = (e) => {
    console.log(e);
    setFormData((prev) => ({
      ...prev,
      Type: e?.target?.value,
    }));
    setIsDraft(true);
  };

  const handleBookingChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      Booking: e?.target?.checked,
    }));
    setIsDraft(true);
  };

  const handleSliderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      Accessibility: e?.target?.value,
    }));
    setIsDraft(true);
  };

  const handleSave = () => {
    storeToDoList(formData);
    localStorage.removeItem("DRAFT");
  };

  return (
    <Grid2
      display={"flex"}
      gap={"24px"}
      flexDirection={"column"}
      width={"100%"}
      height={"100%"}
      maxWidth={"720px"}
      maxHeight={"600px"}
      padding={"20px"}
      borderRadius={"20px"}
      sx={{ background: "white" }}
    >
      <StyledTextField
        required
        label="Activity"
        value={formData.Activity}
        onChange={handleActivityChange}
      />
      <StyledTextField
        required
        label="Price"
        onChange={handlePriceChange}
        value={Number(formData.Price)}
      />
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select
          value={formData.Type}
          required
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value="education">Education</MenuItem>
          <MenuItem value="recreational">Recreational</MenuItem>
          <MenuItem value="social">Social</MenuItem>
          <MenuItem value="diy">DIY</MenuItem>
          <MenuItem value="charity">Charity</MenuItem>
          <MenuItem value="cooking">Cooking</MenuItem>
          <MenuItem value="relaxation">Relaxation</MenuItem>
          <MenuItem value="music">Music</MenuItem>
          <MenuItem value="busywork">Busywork</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <StyledCheckboxLabel
          checked={formData?.Booking}
          color="black"
          control={<Checkbox onChange={handleBookingChange} />}
          label="Booking"
        />
      </FormGroup>
      <Grid2>
        <Typography color="black">Accessibility</Typography>
        <Slider
          value={formData.Accessibility}
          onChange={handleSliderChange}
          min={0}
          max={1}
          step={0.01}
          valueLabelDisplay="on"
        />
      </Grid2>
      <Button onClick={handleSave}>Add List</Button>
    </Grid2>
  );
}
