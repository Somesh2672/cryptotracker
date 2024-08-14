import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { color } from 'framer-motion';
import { Palette } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';
import "./style.css";
import Grid from '../Grid';


export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    Palette: {
        primary:{
            main:"03a80e9",
        },
    },
  });

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight : "600",
    fontFamily : "Inter",
    textTransform : "capitalize",
  }
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value} >
        
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        
        <TabPanel value="grid">
          <div className="grid-flex">
            { coins.map((coin, i)=> {
            return <Grid coin={coin} key={i} />;
          })}
          </div>
          </TabPanel>
        <TabPanel value="list">
        <div>{coins.map((item,i)=>{
            return<p key={i}>{i+1}.{item.id}</p>
          })}</div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}