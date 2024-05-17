import { Stack } from "@mui/material";
import { DashboardCardTitle } from "./DashboardCardTitle";
import { Chart1 } from "./Chart1";

export const MerchantDashbaordChart1 = () => {
  return (
    <Stack py={2} px={3} gap={3} borderRadius={"12px"} bgcolor={"common.white"}>
      <DashboardCardTitle title="Борлуулалт" />
      <Stack>
        <Chart1 />
      </Stack>
    </Stack>
  );
};
