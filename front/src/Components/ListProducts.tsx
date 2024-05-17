"use client";

import { Stack } from "@mui/material";
import { useData } from "./Providers/DataProvider";
import { ListCardProduct } from "./ListCardProduct";

export const ListProducts = () => {
  const { allProducts } = useData();
  return (
    <Stack gap={"34px"} mt={6}>
      {allProducts.map((item, index) => (
        <ListCardProduct
          key={index}
          merchId={item.merchId}
          productName={item.productName}
          productImage={item.productImage}
          productColor={item.productColor}
          productPrice={item.productPrice}
          productAdditional={item.productAdditional}
          productId={item._id}
          avgStars={item.avgStars}
        />
      ))}
    </Stack>
  );
};
