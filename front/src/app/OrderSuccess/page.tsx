"use client";
import { useData } from "@/Components/Providers/DataProvider";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrderSuccess() {
  const router = useRouter();
  const { setCartProduct } = useData();
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "96px",
        marginBottom: "96px",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={3}
        m={"auto"}
        maxWidth={"800px"}
        borderBottom={1}
        borderLeft={1}
        borderColor={"#D2D1D1"}
        sx={{ borderStyle: "dashed" }}
        px={12}
        pb={8}
        position={"relative"}
      >
        <Image
          alt="clock"
          width={94}
          height={94}
          src={"/clock.png"}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(-50%,-50%)",
          }}
        />
        <Image
          alt="clock"
          width={70}
          height={70}
          src={"/checklist.png"}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            transform: "translate(50%,50%)",
          }}
        />
        <Stack
          width={70}
          height={70}
          bgcolor={"#F6F7FA"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"50%"}
        >
          <Stack
            width={50}
            height={50}
            bgcolor={"common.white"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
          >
            <Image
              alt="success"
              width={45}
              height={45}
              src={"/successIcon.png"}
            />
          </Stack>
        </Stack>
        <Typography color={"#101750"} fontSize={36} fontWeight={800}>
          Таны захиалга амжилттай
        </Typography>
        <Typography color={"#8D92A7"} fontSize={16} fontWeight={600}>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </Typography>
        <Button
          sx={{ height: "59px", width: "208px" }}
          variant="contained"
          color="success"
          onClick={() => {
            setCartProduct([]);
            router.push("/");
          }}
        >
          <Typography>Үргэлжлүүлэх</Typography>
        </Button>
      </Stack>
    </Container>
  );
}
