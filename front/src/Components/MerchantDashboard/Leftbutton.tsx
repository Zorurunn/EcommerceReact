import { ArrowBack, ArrowLeft } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Image from "next/image";

export const LeftButton = () => {
  return (
    <Stack
      width={48}
      height={48}
      bgcolor={"#1C20240A"}
      borderRadius={"50%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ArrowBack />
    </Stack>
  );
};
