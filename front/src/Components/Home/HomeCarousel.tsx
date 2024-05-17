"use client";
import { Container, Stack } from "@mui/material";

import { useData } from "../Providers/DataProvider";
import { HomeCarouselCard } from "./HomeCarouselCard";

export const HomeCarousel = () => {
  const { allProducts } = useData();
  return (
    <Stack bgcolor={"#F2F0FF"}>
      <Container maxWidth="lg">
        <HomeCarouselCard />
      </Container>
    </Stack>
  );
};
