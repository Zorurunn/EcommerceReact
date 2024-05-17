"use client";
import { OrderAddress } from "@/Components/OrderAddress";
import { useData } from "@/Components/Providers/DataProvider";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function DeliveryAddress() {
  const { cartProduct, numberFormatter } = useData();
  const sumCart = cartProduct.reduce((sum, currentValue) => {
    return sum + currentValue.productPrice * currentValue.orderQty;
  }, 0);
  console.log(cartProduct);
  return (
    <Stack my={12}>
      <Container maxWidth="lg">
        <Box width={1}>
          <Stack width={1} mb={"25px"}>
            <Typography color="#1D3178" fontSize={24} fontWeight={800}>
              Захиалга
            </Typography>
            <Typography color="#1D3178" fontSize={12} fontWeight={400}>
              Хүргэлтийн хаяг
            </Typography>
          </Stack>
          <Stack width={1} flexDirection={"row"} gap={3}>
            <Stack width={0.7}>
              <OrderAddress />
            </Stack>
            <Stack width={0.3} gap={"14px"}>
              {cartProduct.map((item, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={"14px"}
                  borderBottom={1}
                  borderColor={"#E1E1E4"}
                  pb={"15px"}
                >
                  <Stack
                    position={"relative"}
                    width={1}
                    sx={{ aspectRatio: 1 / 1 }}
                  >
                    <Image
                      src={item.productImage[0]}
                      style={{ objectFit: "cover" }}
                      sizes="small"
                      alt="product image"
                      fill
                    />
                  </Stack>
                  <Stack width={1}>
                    <Typography fontSize={14} fontWeight={800}>
                      {item.productName}
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight={800}
                      color={"#A1A8C1"}
                      display={"flex"}
                      flexDirection={"row"}
                      alignItems={"center"}
                      gap={1}
                    >
                      Өнгө:
                      <Stack flexDirection={"row"} gap={0.5}>
                        {item.productColor.map((element, index) => (
                          <Stack
                            key={index}
                            flexDirection={"row"}
                            position={"relative"}
                            sx={{ aspectRatio: 1 / 1 }}
                            p={0.5}
                            borderRadius={"50%"}
                            bgcolor={element}
                          ></Stack>
                        ))}
                      </Stack>
                    </Typography>
                  </Stack>

                  <Stack>
                    <Typography
                      fontSize={14}
                      fontWeight={700}
                      color={"#151875"}
                    >
                      {numberFormatter.format(
                        item.productPrice * item.orderQty
                      )}
                      {"₮"}
                    </Typography>
                  </Stack>
                </Box>
              ))}

              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                color={"#151875"}
                fontSize={18}
              >
                <Typography fontWeight={600}>Нийт дүн:</Typography>
                <Typography fontWeight={800}>
                  {numberFormatter.format(sumCart)}
                  {"₮"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
}
