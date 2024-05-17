import { MerchantDashboardHeader } from "@/Components/MerchantDashboard/MerchantDashboardHeader";
import { MerchantDashboardIncome } from "@/Components/MerchantDashboard/MerchantDashboardIncome";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboard/MerchantDashboardLeft";
import { OrderList } from "@/Components/MerchantDashboard/OrderList";
import { Box, Stack } from "@mui/material";

export default function Income() {
  return (
    <Stack flex={1}>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
        <Stack width={1} alignItems={"center"} bgcolor={"#F7F7F8"}>
          <Stack
            width={1}
            maxWidth={"724px"}
            alignItems={"center"}
            py={2}
            justifyContent={"center"}
          >
            <MerchantDashboardIncome totalIncome={250000} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
