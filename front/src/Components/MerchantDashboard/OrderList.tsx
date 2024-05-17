"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import { Ordertable } from "./OrderTable";

type OrderListProps = {};
export const OrderList = (props: OrderListProps) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            color: "secondary.dark",
          }}
        >
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Бүгд" value="1" />
            <Tab label="Шинэ захиалга" value="2" />
            <Tab label="Бэлтгэгдэж байна" value="3" />
            <Tab label="Хүргэлтэнд гарсан" value="4" />
            <Tab label="Хүргэгдсэн" value="5" />
            <Tab label="Цуцлагдсан" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Ordertable />
        </TabPanel>
        <TabPanel value="2">Ангилал2</TabPanel>
        <TabPanel value="3">Ангилал3</TabPanel>
        <TabPanel value="4">Ангилал4</TabPanel>
        <TabPanel value="5">Ангилал5</TabPanel>
        <TabPanel value="6">Ангилал6</TabPanel>
      </TabContext>
    </Box>
  );
};
