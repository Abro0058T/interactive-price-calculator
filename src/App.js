import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import icon from './assest/icon-slider.svg'
import check from './assest/icon-check.svg'
import style from './App.module.css'
const marks = [
  {
    value: 8,
    label: '10K',
  },
  {
    value: 12,
    label: '50K',
  },
  {
    value:16,
    label: '100k',
  },
  {
    value: 24,
    label: '500k',
  },
  {
    value:36,
    label:'1M'
  }
];



export default function App() {
  const [value ,setValue]=useState(8);
  const [mode,setMode]=useState(true);
  const [pages,setPages]=useState(10);
  function valuetext(value) {
    setValue(value)
    return `${value}°C`;
  }
  function toggle()
  {
    // AntSwitch()
    (mode?setMode(false):setMode(true))
  }
  function valueLabelFormat(value) {
    setPages(marks[(marks.findIndex((mark) => mark.value === value))].label)
    return value
  }
  
  return (
    <div className='main'>
    <h2>Simple , traffic-based pricing</h2>
    <p>Sign-up for our 30-day trial.No credit card reqquired</p>
    <p>{pages} PAGEVIEWS</p>
    {
      (mode?` $${value}/month`:`$ ${value*0.75} /month`)
    }
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={8}
        // color="white"
        sx={{
          width: 300,
          color: 'success.main',
          '& .MuiSlider-thumb': {
            width:30,
            height:30,
            backgroundImage:`url(${icon})`,
            backgroundSize:20,
            backgroundPositionY:8,
            backgroundPositionX:4,
            backgroundRepeat:'no-repeat'
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
     <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Monthly Billing</Typography>
        <Switch onChange={toggle} inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>Yearly Billing <span>25% discount</span></Typography>
      </Stack>
    <div className="denifits">
      <p><img src={check} alt="" />Unlimited websites</p>
      <p><img src={check} alt="" />100% data ownership</p>
      <p><img src={check} alt="" />Email reports</p>
    </div>
    <button>Start my trial</button>
        </div>

  );
}