"use client";
import {
  Favorite,
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useData } from "./Providers/DataProvider";
import { useState } from "react";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { useRouter } from "next/navigation";
import { CartType } from "./Providers/DataProvider";
import { ProductType } from "./Providers/DataProvider";

type CardMainProps = {
  merchId?: string;
  productImage: string[];
  productName: string;
  productColor: string[];
  productPrice: number;
  userId?: string;
  productId: string;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "800px",
  width: { xs: "90%", md: "50%" },
  bgcolor: "background.paper",
  border: "1px solid #DADCE0",
  boxShadow: 24,
  p: 2,
  borderRadius: "8px",
};
export const CardMain = (props: CardMainProps) => {
  const {
    productImage,
    productName,
    productColor,
    productPrice,
    productId,
    merchId,
  } = props;
  const {
    numberFormatter,
    updateReaction,
    cartProduct,
    setCartProduct,
    setDetailId,
  } = useData();
  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState(false);
  const router = useRouter();
  const isInCart = Boolean(
    cartProduct.find((item) => item.productId == productId)
  );
  return (
    <Stack width={1} height={1}>
      <Stack
        position={"relative"}
        width={1}
        sx={{
          aspectRatio: 1 / 1,
          transition: "0.2 linear",
          "&:hover .image": {
            transform: "scale(1.05)",
            transition: "0.2s ease",
          },
          "&:hover .details": {
            opacity: "1",
          },
          ".image": {
            transition: "0.5s ease",
          },
        }}
        overflow={"hidden"}
        bgcolor={"common.white"}
      >
        <Image
          className="image"
          alt="product image"
          style={{ objectFit: "cover", mixBlendMode: "multiply" }}
          priority={true}
          src={productImage[0]}
          fill
          sizes="small"
        />
        <Stack
          position={"absolute"}
          sx={{ opacity: 0, transition: "0.3s ease" }}
          className="details"
          width={1}
          height={1}
          bgcolor={"#00000000"}
          justifyContent={"space-between"}
          zIndex={1}
        >
          <Stack gap={1.25} p={"11px"} height={1} justifyContent={"end"}>
            <Stack
              width={30}
              height={30}
              bgcolor={"common.white"}
              color={"#151875"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                if (!isInCart) {
                  setCartProduct((prev: any) => [
                    ...prev,
                    {
                      productId,
                      merchId,
                      productImage,
                      productName,
                      productColor,
                      productPrice,
                      orderQty: 1,
                    },
                  ]);
                }
              }}
            >
              <ShoppingCartOutlined fontSize="inherit" color="inherit" />
            </Stack>
            <Stack
              onClick={() => {
                updateReaction(productId);
                setFav(true);
              }}
              width={30}
              height={30}
              borderRadius={"50%"}
              color={fav ? "#e31b23" : "#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              {fav ? (
                <Favorite fontSize="inherit" color="inherit" />
              ) : (
                <FavoriteBorder fontSize="inherit" color="inherit" />
              )}
            </Stack>
            <Stack
              onClick={() => {
                setOpen(true);
              }}
              width={30}
              height={30}
              borderRadius={"50%"}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <ZoomIn fontSize="inherit" color="inherit" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography
          onClick={() => {
            setDetailId(productId);
            router.push("/ProductDetail");
          }}
          sx={{ cursor: "pointer" }}
          color={"#151875"}
          mt={"18px"}
          fontSize={18}
          fontWeight={700}
        >
          {productName}
        </Typography>
        <Stack flexDirection={"row"} gap={"6px"} mt={1} mb="15px">
          {productColor.map((item, index) => (
            <Stack
              key={index}
              p={"5px"}
              borderRadius={10}
              bgcolor={item}
            ></Stack>
          ))}
        </Stack>
        <Stack flexDirection={"row"} gap={1.25} fontSize={14} fontWeight={400}>
          <Typography color={"#151875"}>
            {numberFormatter.format(productPrice)}
            {"₮"}
          </Typography>
          <Typography color={"#FB2E86"} sx={{ textDecoration: "line-through" }}>
            {numberFormatter.format(productPrice)}
            {"₮"}
          </Typography>
        </Stack>
      </Stack>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <ProductDetail
            productImage={productImage[0]}
            productName={productName}
            setOpen={setOpen}
          />
        </Box>
      </Modal>
    </Stack>
  );
};
