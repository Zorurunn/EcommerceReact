import { Stack } from "@mui/material";
import { DashboardCardTitle } from "./DashboardCardTitle";
import { Chart2 } from "./Chart2";

export const MerchantDashbaordChart2 = () => {
  return (
    <Stack py={2} px={3} borderRadius={"12px"} bgcolor={"common.white"}>
      <DashboardCardTitle title="Идэвхтэй бүс нутаг" />
      <Stack mt={3} gap={4}>
        <Chart2 location="Улаанбаатар" percent={70} />
        <Chart2 location="Дархан" percent={20} />
        <Chart2 location="Эрдэнэт" percent={10} />
        <Chart2 location="Бусад" percent={5} />
      </Stack>
    </Stack>
  );
};
