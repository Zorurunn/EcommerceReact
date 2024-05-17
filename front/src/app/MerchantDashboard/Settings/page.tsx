"use client";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboard/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboard/MerchantDashboardLeft";
import { ShopProfile } from "@/Components/ShopProfile";
import { Box, Stack } from "@mui/material";

export default function Product() {
  return (
    <Stack>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
        <Stack
          width={1}
          height={"100vh"}
          bgcolor={"#F7F7F8"}
          alignItems={"center"}
          pt={"49.5px"}
        >
          <ShopProfile />
        </Stack>
      </Stack>
    </Stack>
  );
}
