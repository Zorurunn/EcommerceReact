"use client";
import { LoadingPage } from "@/Components/LoadingPage";
import { MerchantDashbaordMain } from "@/Components/MerchantDashboard/MerchDashboardMain";
import { MerchantDashbaordChart1 } from "@/Components/MerchantDashboard/MerchantDashboardChart1";
import { MerchantDashbaordChart2 } from "@/Components/MerchantDashboard/MerchantDashboardChart2";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboard/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboard/MerchantDashboardLeft";
import { MerchantDashbaordTop } from "@/Components/MerchantDashboard/MerchantDashboardTop";
import { useAuth } from "@/Components/Providers/AuthProvider";
import { Box, Stack } from "@mui/material";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useData } from "@/Components/Providers/DataProvider";

export default function MerchantDashbaord() {
  const { isLogged } = useAuth();
  const { merchOrders } = useData();

  useEffect(() => {
    if (!isLogged) {
      redirect("/Signin");
    }
  }, [isLogged]);

  return (
    <>
      {isLogged ? (
        <Stack>
          <MerchantDashboardHeader />
          <Stack flexDirection={"row"}>
            <Box minWidth={"222px"}>
              <MerchantDashboardLeft />
            </Box>
            <Stack
              pt={"34px"}
              pb={"66px"}
              gap={"34px"}
              px={3}
              width={1}
              bgcolor={"#F7F7F8"}
            >
              <MerchantDashbaordMain />
              <Stack flexDirection={"row"} gap={3}>
                <MerchantDashbaordTop />
                <Stack width={0.5} gap={3}>
                  <MerchantDashbaordChart1 />
                  <MerchantDashbaordChart2 />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
