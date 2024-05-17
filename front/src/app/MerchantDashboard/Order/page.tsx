"use client";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboard/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboard/MerchantDashboardLeft";
import { OrderList } from "@/Components/MerchantDashboard/OrderList";
import { Box, Stack } from "@mui/material";

export default function Order() {
  return (
    <Stack>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
        <Stack width={1} height={1}>
          <OrderList />
        </Stack>
      </Stack>
    </Stack>
  );
}
