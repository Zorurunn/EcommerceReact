"use client";
import { FileDownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useData } from "../Providers/DataProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Incometable } from "./IncomeTable";

type MerchantDashboardIncomeProps = {
  totalIncome: number;
};
export const MerchantDashboardIncome = (
  props: MerchantDashboardIncomeProps
) => {
  const { totalIncome } = props;
  const { numberFormatter } = useData();
  return (
    <Stack gap={2} width={1}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        border={1}
        borderColor={"#ECEDF0"}
        borderRadius={1.5}
        bgcolor={"common.white"}
      >
        <Stack
          borderBottom={1}
          borderColor={"#ECEDF0"}
          py={2.5}
          px={3}
          flexDirection={"row"}
          justifyContent={"space-between"}
          color={"secondary.dark"}
        >
          <Typography fontSize={20} fontWeight={700}>
            Орлого
          </Typography>
          <Button
            variant="text"
            color="secondary"
            sx={{ bgcolor: "#1C20240A", px: "12px" }}
            startIcon={<FileDownloadOutlined />}
          >
            <Typography fontSize={16} fontWeight={600}>
              Хуулга татах
            </Typography>
          </Button>
        </Stack>
        <Stack
          flexDirection={"row"}
          p={3}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={28} fontWeight={700}>
            {numberFormatter.format(totalIncome)}
            {totalIncome && "₮"}
          </Typography>
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                bgcolor: "#18BA51",
                color: "secondary.light",
                borderColor: "#ECEDF0",
              }}
            >
              Өнөөдөр
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                bgcolor: "common.white",
                color: "secondary.light",
                borderColor: "#ECEDF0",
              }}
            >
              7 хоног
            </Button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer sx={{ p: 0 }} components={["DatePicker"]}>
                <DatePicker
                  disableFuture
                  monthsPerRow={3}
                  //   label="ss"
                  views={["month", "year"]}
                  slotProps={{
                    inputAdornment: {
                      position: "start",
                      color: "secondary",
                    },
                    openPickerButton: {
                      size: "small",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Incometable />
      </Box>
    </Stack>
  );
};
