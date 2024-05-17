"use client";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useData } from "./Providers/DataProvider";
import {
  Favorite,
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FeaturedProductCardProps = {
  merchId: string;
  productImage: string[];
  productName: string;
  productPrice: number;
  productId: string;
  productColor: string[];
  setPaused: (value: boolean) => void;
};

export const FeaturedProductCard = (props: FeaturedProductCardProps) => {
  const {
    productImage,
    productName,
    productPrice,
    setPaused,
    productId,
    productColor,
    merchId,
  } = props;
  const {
    numberFormatter,
    updateReaction,
    setDetailId,
    cartProduct,
    setCartProduct,
  } = useData();
  const [fav, setFav] = useState(false);
  const router = useRouter();
  const isInCart = Boolean(
    cartProduct.find((item) => item.productId == productId)
  );
  return (
    <Stack
      onMouseOver={() => {
        setPaused(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
      }}
      width={1}
      boxShadow={2}
      overflow={"hidden"}
      sx={{
        aspectRatio: 270 / 361,
        transition: "0.2 linear",
        "&:hover .info": {
          backgroundColor: "#2F1AC4",
        },
        "&:hover .details": {
          opacity: "1",
        },
        "&:hover .productName": {
          color: "common.white",
        },
        "&:hover .productPrice": {
          color: "common.white",
        },
        "&:hover .image": {
          transform: "scale(1.05)",
          transition: "0.2s ease",
        },
        ".image": {
          transition: "0.5s ease",
        },
        ".info": {
          transition: "0.5s ease",
        },
      }}
    >
      <Stack
        width={1}
        sx={{ aspectRatio: 1 / 1 }}
        position={"relative"}
        zIndex={1}
        maxHeight={"270px"}
      >
        <Image
          className="image"
          alt="product image"
          priority={true}
          style={{
            objectFit: "cover",
            aspectRatio: 1 / 1.2,
            mixBlendMode: "multiply",
          }}
          fill
          sizes="small"
          src={productImage[0]}
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
          <Stack flexDirection={"row"} gap={2} p={"11px"}>
            <Stack
              onClick={() => {
                if (!isInCart) {
                  setCartProduct((prev) => [
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
              width={30}
              height={30}
              bgcolor={"#0000000D"}
              color={"primary.main"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
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
              bgcolor={"#ffffff99"}
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
              width={30}
              height={30}
              bgcolor={"#ffffff99"}
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
          <Stack pb={1.5} alignItems={"center"}>
            <Button
              onClick={() => {
                setDetailId(productId);
                router.push("/ProductDetail");
              }}
              variant="contained"
              color="primary"
              sx={{
                bgcolor: "#08D15F",
                color: "common.white",
                width: "fit-content",
              }}
            >
              <Typography>дэлгэрэнгүй</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        className="info"
        pt={"15px"}
        pb={"29px"}
        gap={"37px"}
        bgcolor={"common.white"}
        fontSize={18}
        fontWeight={700}
        width={1}
        alignItems={"center"}
        sx={{ transition: "0.3s linear" }}
      >
        <Typography
          width={1}
          px={3}
          textAlign={"center"}
          className="productName"
          color={"primary.light"}
        >
          {productName}
        </Typography>
        <Typography className="productPrice" color={"#151875"}>
          {numberFormatter.format(productPrice)}
          {"₮"}
        </Typography>
      </Stack>
    </Stack>
  );
};
