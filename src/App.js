import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import icon from "./assest/icon-slider.svg";
import check from "./assest/icon-check.svg";
import style from "./App.module.css";
const marks = [
  {
    value: 8,
    label: "10K",
  },
  {
    value: 12,
    label: "50K",
  },
  {
    value: 16,
    label: "100k",
  },
  {
    value: 24,
    label: "500k",
  },
  {
    value: 36,
    label: "1M",
  },
];

export default function App() {
  const [value, setValue] = useState(8);
  const [mode, setMode] = useState(true);
  const [pages, setPages] = useState(10);
  const [theme, setTheme] = useState(true);
  function valuetext(value) {
    setValue(value);
    return `${value}°C`;
  }
  function toggle() {
    // AntSwitch()
    mode ? setMode(false) : setMode(true);
  }
  function valueLabelFormat(value) {
    setPages(marks[marks.findIndex((mark) => mark.value === value)].label);
    return value;
  }
  function toggleDark() {
    theme ? setTheme(false) : setTheme(true);
  }
  console.log(style);
  return (
    <div
      className={style.Main}
      style={{
        border: "2px solid rgb(175,175,175)",
        borderRadius: "20px",
        backgroundColor: `${theme ? "white" : "#041C32"}`,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Switch
          style={{ cursor: "pointer" }}
          onChange={toggleDark}
          inputProps={{ "aria-label": "ant design" }}
        />
      </Stack>
      <h2
        className={style.heading}
        style={{ color: `${theme ? "black" : "white"}` }}
      >
        Simple , traffic-based pricing
      </h2>
      <p className={style.subheading}>
        Sign-up for our 30-day trial.No credit card reqquired
      </p>
      <div className={style.slider}>
        <p className={style.pages}>{pages} PAGEVIEWS</p>

        {mode ? (
          <p className={style.rate}>
            <span
              className={style.price}
              style={{ color: `${theme ? "black" : "white"}` }}
            >
              ${value}
            </span>
            /month
          </p>
        ) : (
          <p className={style.rate}>
            <span
              className={style.price}
              style={{ color: `${theme ? "black" : "white"}` }}
            >
              ${value * 0.75}
            </span>
            /month
          </p>
        )}
        <Box className={style.box} sx={{ width: 300 }}>
          <Slider
            aria-label="Restricted values"
            defaultValue={8}
            // color="white"
            sx={{
              width: 300,
              color: "rgb(36, 208, 220)",
              "& .MuiSlider-thumb": {
                width: 30,
                height: 30,
                backgroundImage: `url(${icon})`,
                backgroundSize: 20,
                backgroundPositionY: 8,
                backgroundPositionX: 4,
                backgroundRepeat: "no-repeat",
              },
            }}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            // valueLabelDisplay="auto"
            marks={marks}
            min={8}
            max={36}
          />
        </Box>
      </div>
      <div className={style.buttonpart}>
        <p className={style.leftButton}>Monthly Billing</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Switch
            style={{ cursor: "pointer" }}
            onChange={toggle}
            inputProps={{ "aria-label": "ant design" }}
          />
        </Stack>
        <p className={style.rightButton}>
          Yearly Billing &nbsp; &nbsp;{" "}
          <span className={style.discount}>25% discount</span>
        </p>
      </div>
      <div className={style.features}>
        <span>
          <p>
            <img src={check} alt="" />
            Unlimited websites
          </p>
          <p>
            <img src={check} alt="" />
            100% data ownership
          </p>
          <p>
            <img src={check} alt="" />
            Email reports
          </p>
        </span>
        <button>Start my trial</button>
      </div>
    </div>
  );
}
