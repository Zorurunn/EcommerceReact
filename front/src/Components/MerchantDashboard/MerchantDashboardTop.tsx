import { Stack } from "@mui/material";
import { DashboardCardTitle } from "./DashboardCardTitle";
import { TopSales } from "./TopSales";

export const MerchantDashbaordTop = () => {
  return (
    <Stack
      py={2}
      px={3}
      borderRadius={"12px"}
      bgcolor={"common.white"}
      gap={"20px"}
      width={0.5}
    >
      <DashboardCardTitle title="Шилдэг бүтээгдэхүүн" />
      <TopSales />
    </Stack>
  );
};
