"use client";
import { Cart } from "@/Components/ShoppingCart/Cart";
import { useData } from "@/Components/Providers/DataProvider";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const { setCartProduct, cartProduct, numberFormatter } = useData();
  const router = useRouter();
  const sumCart = cartProduct.reduce((sum, currentValue) => {
    return sum + currentValue.productPrice * currentValue.orderQty;
  }, 0);
  return (
    <Stack>
      <Container maxWidth="lg">
        <Stack
          width={1}
          my={12}
          flexDirection={"row"}
          gap={9}
          alignItems={"flex-start"}
          justifyContent={"start"}
        >
          <Stack width={0.7}>
            <Cart />
            <Stack width={1} alignItems={"end"}>
              <Button
                onClick={() => {
                  setCartProduct([]);
                }}
                color="success"
                variant="contained"
                sx={{ width: "fit-content" }}
              >
                <Typography fontSize={16} fontWeight={600}>
                  Карт цэвэрлэх
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Stack width={0.3} gap={5} mt={2}>
            <Typography color={"#1D3178"} fontSize={20} fontWeight={800}>
              Нийт төлөх
            </Typography>
            <Stack
              bgcolor={"#F4F4FC"}
              color={"#1D3178"}
              width={1}
              px={3}
              py={4}
            >
              <Stack
                borderBottom={2}
                borderColor={"#E8E6F1"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                pb={"15px"}
              >
                <Typography fontSize={18} fontWeight={600}>
                  Нийлбэр:
                </Typography>
                <Typography fontSize={18} fontWeight={700} color="#151875">
                  {numberFormatter.format(sumCart)}
                </Typography>
              </Stack>
              <Stack
                borderBottom={2}
                borderColor={"#E8E6F1"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                pb={"15px"}
                pt={"34px"}
              >
                <Typography fontSize={18} fontWeight={600}>
                  Төлөх дүн:
                </Typography>
                <Typography fontSize={20} fontWeight={700} color="#151875">
                  {numberFormatter.format(sumCart)}
                </Typography>
              </Stack>
              <Stack mt={"47px"}>
                <Button
                  onClick={() => {
                    router.push("/DeliveryAddress");
                  }}
                  disabled={!cartProduct.length}
                  variant="contained"
                  sx={{ height: "40px", bgcolor: "#19D16F" }}
                >
                  <Typography fontSize={14} fontWeight={700}>
                    Худалдан авах
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
