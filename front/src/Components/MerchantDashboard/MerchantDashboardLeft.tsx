"use client";
import {
  ContentPaste,
  ListAlt,
  Sell,
  Settings,
  Window,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
const merchantNavList = [
  {
    text: "Хяналтын самбар",
    icon: <Window />,
    path: "/MerchantDashboard",
  },
  {
    text: "Захиалга",
    icon: <ContentPaste />,
    path: "/MerchantDashboard/Order",
  },
  { text: "Орлого", icon: <Sell />, path: "/MerchantDashboard/Income" },
  {
    text: "Бүтээгдэхүүн",
    icon: <ListAlt />,
    path: "/MerchantDashboard/Product",
  },
  { text: "Тохиргоо", icon: <Settings />, path: "/MerchantDashboard/Settings" },
];
export const MerchantDashboardLeft = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Stack
      gap={2}
      pt={3}
      color={"secondary.main"}
      bgcolor={"common.white"}
      width={1}
      height={"100vh"}
    >
      {merchantNavList.map((item, index) => (
        <Stack
          key={item && index}
          flexDirection={"row"}
          bgcolor={pathname == item.path ? "#1C202414" : "fff"}
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(item.path);
          }}
        >
          <Stack py={1} px={2}>
            {item.icon}
          </Stack>
          <Typography
            width={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"start"}
          >
            {item.text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
