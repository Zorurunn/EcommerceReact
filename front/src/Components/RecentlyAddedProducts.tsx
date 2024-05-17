"use client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { CardMain } from "./CardMain";
import { useData } from "./Providers/DataProvider";

export const RecentlyAddedProducts = () => {
  const { allProducts, cartProduct } = useData();
  return (
    <Container maxWidth="lg">
      <Stack alignItems={"center"} mb={"119px"}>
        <Typography
          color={"#151875"}
          fontSize={42}
          fontWeight={800}
          mb={"53px"}
          onClick={() => {
            console.log("cart", cartProduct);
          }}
        >
          Шинээр нэмэгдсэн
        </Typography>
        <Grid container columnSpacing={"53px"} rowSpacing={"62px"}>
          {allProducts.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
              <Stack width={270}>
                <CardMain
                  merchId={item.merchId}
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
      </Stack>
    </Container>
  );
};
