"use client";
import { AttachMoney, ContentPaste, PersonOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useData } from "../Providers/DataProvider";
type DashboardTotalCardProps = {
  text: string;
  totalIncome: number;
  orderCount: number;
  userCount: number;
};
export const DashboardTotalCard = (props: DashboardTotalCardProps) => {
  const { text, totalIncome, orderCount, userCount } = props;
  const { numberFormatter } = useData();
  return (
    <Stack
      width={1}
      bgcolor={"common.white"}
      borderRadius={2}
      px={3}
      py={2}
      gap={1.5}
    >
      <Stack flexDirection={"row"} gap={1}>
        {text == "Орлого" && <AttachMoney />}
        {text == "Захиалга" && <ContentPaste />}
        {text == "Хэрэглэгч" && <PersonOutline />}
        <Typography color={"secondary.dark"} fontSize={16} fontWeight={600}>
          {text}
        </Typography>
      </Stack>

      <Typography color={"secondary.dark"} fontSize={32} fontWeight={700}>
        {text == "Орлого" && numberFormatter.format(totalIncome)}
        {text == "Захиалга" && numberFormatter.format(orderCount)}
        {text == "Хэрэглэгч" && numberFormatter.format(userCount)}
      </Typography>

      <Typography
        fontSize={14}
        fontWeight={400}
        color={"#5E6166"}
        sx={{ cursor: "pointer" }}
      >
        Өнөөдөр
      </Typography>
    </Stack>
  );
};
