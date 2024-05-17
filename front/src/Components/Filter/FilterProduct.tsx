"use client";
import { Stack } from "@mui/material";
import { useData } from "../Providers/DataProvider";
import { FilterRating } from "./FilterRating";
import { FilterCategory } from "./FilterCategory";
import { FilterPrice } from "./FilterPrice";

export const FilterProdcut = () => {
  const { allProducts } = useData();
  return (
    <Stack gap={6} mt={6}>
      <FilterRating />
      <FilterCategory />
      <FilterPrice />
    </Stack>
  );
};
