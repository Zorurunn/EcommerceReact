"use client";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomInput } from "../Authentication/CustomInput";
import { Add, ImageOutlined } from "@mui/icons-material";
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { toast } from "react-toastify";

type AddProductLeftProps = {
  productName: string;
  productCode: string;
  productAdditional: string;
  productPrice?: number;
  productStocks?: number;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  imageUrl: string[];
  setImageUrl: Dispatch<SetStateAction<string[]>>;
  tag: string[];
  setTag: Dispatch<SetStateAction<string[]>>;
  editProduct: any;
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export const AddProductLeft = (props: AddProductLeftProps) => {
  const {
    productName,
    productCode,
    productAdditional,
    productPrice,
    productStocks,
    handleBlur,
    handleChange,
    imageUrl,
    setImageUrl,
    tag,
    setTag,
    editProduct,
  } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/drik9j46w/upload?upload_preset=wco4x3yn",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setImageUrl([...imageUrl, data.secure_url]);
      } catch (error) {
        toast.error("Image upload error:");
      }
    }
  };
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };
  useEffect(() => {
    handleImageUpload();
  }, [selectedFile]);

  return (
    <Stack gap={3} width={1}>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <CustomInput
          label="Бүтээгдэхүүний нэр"
          type="text"
          placeholder="Нэр"
          labelWeight={600}
          name="productName"
          value={productName}
          onBlur={handleBlur}
          onChange={handleChange}
        />{" "}
        <CustomInput
          label="Нэмэлт мэдээлэл"
          type="textfield"
          placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
          labelWeight={600}
          name="productAdditional"
          value={productAdditional}
          onBlur={handleBlur}
          onChange={handleChange}
        />{" "}
        <CustomInput
          label="Барааны код"
          type="text"
          placeholder="#12345678"
          labelWeight={600}
          name="productCode"
          value={productCode}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Stack>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
          Бүтээгдэхүүний зураг
        </Typography>
        <Stack flexDirection={"row"} gap={1} flexWrap={"wrap"}>
          {imageUrl.map((item, index) => (
            <Stack
              border={1}
              borderRadius={2}
              borderColor={"#D6D8DB"}
              width={1 / 4}
              position={"relative"}
              style={{
                borderStyle: "dashed",
                aspectRatio: 1 / 1,
              }}
              fontSize={"medium"}
              alignItems="center"
              justifyContent="center"
              overflow={"hidden"}
            >
              <Image
                src={item}
                style={{ objectFit: "cover" }}
                alt="clothes"
                fill
              />
            </Stack>
          ))}
          <Stack
            border={1}
            borderRadius={2}
            borderColor={"#D6D8DB"}
            width={1 / 4}
            style={{
              borderStyle: "dashed",
              aspectRatio: 1 / 1,
            }}
            fontSize={"medium"}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton component="label" sx={{ backgroundColor: "#D6D8DB" }}>
              <Add />
              <VisuallyHiddenInput
                onChange={handleImageChange}
                sx={{ backgroundColor: "red" }}
                type="file"
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        bgcolor={"common.white"}
        p={3}
        borderRadius={1.5}
        gap={2}
        width={1}
      >
        <Stack width={0.5}>
          <CustomInput
            label="Үндсэн үнэ"
            type="text"
            placeholder="Үндсэн үнэ"
            labelWeight={600}
            name="productPrice"
            value={productPrice}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Stack>
        <Stack width={0.5}>
          <CustomInput
            label="Үлдэгдэл тоо ширхэг"
            type="text"
            placeholder="Үлдэгдэл тоо ширхэг"
            labelWeight={600}
            name="productStocks"
            value={productStocks}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
