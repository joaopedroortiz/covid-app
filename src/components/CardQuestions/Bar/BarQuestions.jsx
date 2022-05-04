import React from "react";
import "./BarQuestions.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

function BarQuestions() {
  return (
    <div className="barQuetions">
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Pontos"
          defaultValue={1}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={14}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>
    </div>
  );
}
export default BarQuestions;
