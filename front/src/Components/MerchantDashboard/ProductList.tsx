"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ProductTab } from "./ProductTab";
import { useData } from "../Providers/DataProvider";
type ProductListProps = {
  setEditId: Dispatch<SetStateAction<string>>;
};
export const ProductList = (props: ProductListProps) => {
  const [value, setValue] = useState("1");
  const { setEditId } = props;
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
            <Tab label="Бүтээгдэхүүн" value="1" />
            <Tab label="Ангилал" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProductTab setEditId={setEditId} />
        </TabPanel>
        <TabPanel value="2">Ангилал</TabPanel>
      </TabContext>
    </Box>
  );
};
