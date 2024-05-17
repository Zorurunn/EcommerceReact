"use client";
import { Grid, Stack } from "@mui/material";
import { useData } from "./Providers/DataProvider";
import { CardMain } from "./CardMain";
type AllProductsProps = {
  column: number;
};
export const AllProducts = (props: AllProductsProps) => {
  const { allProducts } = useData();
  const { column } = props;
  return (
    <Grid container columnSpacing={"53px"} my={5} rowSpacing={"62px"}>
      {allProducts.map((item, index) => (
        <Grid item xs={12} sm={6} md={column} key={index}>
          <Stack width={270}>
            <CardMain
              productImage={item.productImage}
              productName={item.productName}
              productPrice={item.productPrice}
              productColor={item.productColor}
              productId={item._id}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
