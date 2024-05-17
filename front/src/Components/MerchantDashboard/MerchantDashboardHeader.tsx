"use client";

import { NotificationsOutlined, PersonOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useAuth } from "../Providers/AuthProvider";
import { useRouter } from "next/navigation";

export const MerchantDashboardHeader = () => {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <Stack width={1} bgcolor={"secondary.main"}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={0.5}
        px={3}
      >
        <Stack
          onClick={() => {
            router.push("/");
          }}
          sx={{ cursor: "pointer" }}
        >
          <Image
            src="/Plogo.svg"
            alt="pinecone logo"
            sizes="small"
            width={32}
            height={24}
          />
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={2}
          alignItems={"center"}
          color={"common.white"}
          fontSize={"large"}
        >
          <NotificationsOutlined color="inherit" fontSize="inherit" />
          <Stack flexDirection={"row"} alignItems={"center"}>
            <PersonOutline color="inherit" fontSize="inherit" />
            <Typography
              padding={"6px 8px"}
              fontSize={14}
              fontWeight={400}
              color={"common.white"}
            >
              {user.userName.length ? user?.userName : "Username"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
