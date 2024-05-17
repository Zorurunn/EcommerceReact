"use client";
import { useData } from "@/Components/Providers/DataProvider";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Container,
  Grid,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { ProductRating } from "./ProductRating";

type userType = {
  userName: string;
  email: string;
  merchName: string;
  address: { city: string; district: string; khoroo: string };
  experience: string;
  merchType: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
type CommentType = {
  userId: userType;
  productId: string;
  comment: string;
  star: number;
  createdAt: object;
  updatedAt: object;
};
type ProductDetailCardProps = {
  productId?: string;
  productImage?: string[];
  productName?: string;
  productPrice?: number;
  productAdditional?: string;
  productColor?: string[];
  productRating?: number;
  reviewCount?: number;
  comments?: CommentType[];
};
export const ProductDetailCard = (props: ProductDetailCardProps) => {
  const { numberFormatter } = useData();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const {
    productId,
    productImage,
    productName,
    productPrice,
    productAdditional,
    productColor,
    productRating,
    comments,
    reviewCount,
  } = props;
  const [bigImage, setBigImage] = useState(productImage ? productImage[0] : "");
  return (
    <>
      <Stack flex={1} bgcolor="#F7F7F8" py={6}>
        <Container maxWidth="lg">
          <Box display={"flex"} gap={"41px"} width={1}>
            <Stack
              width={0.5}
              sx={{ aspectRatio: 1 / 1 }}
              flexDirection={"row"}
              gap={"21px"}
            >
              <Grid width={0.3} container spacing={"11px"} overflow={"scroll"}>
                {productImage?.map((item, index) => (
                  <Grid item key={index}>
                    <Stack
                      position={"relative"}
                      sx={{
                        width: "100px",
                        cursor: "pointer",
                        aspectRatio: 1 / 1,
                      }}
                      onClick={() => {
                        setBigImage(item);
                      }}
                    >
                      <Image
                        key={index}
                        style={{ objectFit: "cover" }}
                        alt="product image"
                        fill
                        src={item}
                      />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
              <Stack width={1} position={"relative"}>
                <Image
                  src={bigImage}
                  style={{ objectFit: "cover" }}
                  alt="select product image"
                  fill
                  sizes="small"
                />
              </Stack>
            </Stack>
            <Stack width={0.5} gap={2}>
              <Typography fontSize={36} fontWeight={800} color={"#111C85"}>
                {productName}
              </Typography>
              <Stack flexDirection={"row"} alignItems={"center"}>
                <Rating value={productRating} readOnly />
                {"("}
                {reviewCount}
                {")"}
              </Stack>
              <Stack>
                <Typography fontSize={32} fontWeight={400} color={"#151875"}>
                  {numberFormatter.format(productPrice || 0)}
                </Typography>
              </Stack>
              <Stack flexDirection={"row"} gap={1}>
                {productColor?.map((item, index) => (
                  <Stack
                    key={index}
                    p={0.75}
                    bgcolor={item}
                    borderRadius={"50%"}
                  ></Stack>
                ))}
              </Stack>
              <Typography fontSize={17.67} fontWeight={400} color={"#9295AA"}>
                {productAdditional}
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Stack>
      <Stack bgcolor={"#EEEFFB"} py={10}>
        <Container maxWidth="lg">
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                color: "secondary.dark",
              }}
            >
              <TabList
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                style={{ backgroundColor: "#EEEFFB" }}
              >
                <Tab label="Нэмэлт мэдээлэл" value="1" />
                <Tab label="Үнэлгээ" value="2" />
              </TabList>
            </Box>
            <TabPanel sx={{ backgroundColor: "#EEEFFB" }} value="1">
              <Typography color={"#A9ACC6"} fontSize={16} fontWeight={800}>
                {productAdditional}
              </Typography>
            </TabPanel>
            <TabPanel sx={{ backgroundColor: "#EEEFFB" }} value="2">
              <ProductRating
                productId={productId}
                comments={comments}
                productRating={productRating}
                reviewCount={reviewCount}
              />
            </TabPanel>
          </TabContext>
        </Container>
      </Stack>
    </>
  );
};
