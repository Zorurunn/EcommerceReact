"use client";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useData } from "../Providers/DataProvider";
import { useRouter } from "next/navigation";

export const HomeCarouselCard = () => {
  const { setDetailId } = useData();
  const router = useRouter();
  return (
    <Stack flexDirection={"row"} bgcolor={"#F2F0FF"} width={1}>
      <Stack width={0.5} my={"203px"}>
        <Typography fontSize={16} fontWeight={700} color={"#FB2E86"}>
          Тав тухтай орчинг таны амьдралд
        </Typography>
        <Typography
          mt={"12px"}
          fontSize={43}
          lineHeight={"53px"}
          fontWeight={800}
          color={"common.black"}
        >
          2024 оны хамгийн шинэ загвар
        </Typography>
        <Typography mt={3} color={"#8A8FB9"} fontSize={16} fontWeight={700}>
          Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж ирж
          байна
        </Typography>
        <Button
          onClick={() => {
            setDetailId("66060ba2be553b294cdb94e6");
            router.push("/ProductDetail");
          }}
          variant="contained"
          color="success"
          sx={{
            py: 2,
            px: "30px",
            width: "fit-content",
            mt: "27px",
          }}
        >
          <Typography>Дэлгэрэнгүй</Typography>
        </Button>
      </Stack>
      <Stack width={0.5} alignItems={"center"} justifyContent={"center"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          style={{ width: "70%", aspectRatio: 7 / 6 }}
        >
          <Image
            alt="carousel"
            width={300}
            height={300}
            src={"/sofa.png"}
            style={{ zIndex: "2" }}
          />
          <Image
            alt="carousel"
            fill
            src={"/sale.png"}
            style={{ position: "absolute", right: -40, zIndex: 0 }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
