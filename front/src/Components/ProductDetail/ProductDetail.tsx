import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { ST } from "next/dist/shared/lib/utils";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
type ProductDetailProps = {
  productImage: string;
  productName: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ProductDetail = (props: ProductDetailProps) => {
  const { productImage, productName, setOpen } = props;
  return (
    <Stack
      flexDirection={"column"}
      gap={3}
      p={3}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
    >
      <Stack
        onClick={() => {
          setOpen(false);
        }}
        p={1}
        borderRadius={"50%"}
        position={"absolute"}
        zIndex={1}
        top={15}
        right={15}
      >
        <Close />
      </Stack>
      <Stack position={"relative"} width={"600px"} height={"600px"}>
        <Image
          style={{ objectFit: "contain", mixBlendMode: "multiply" }}
          src={productImage}
          alt="zoom in"
          fill
        />
      </Stack>
    </Stack>
  );
};
