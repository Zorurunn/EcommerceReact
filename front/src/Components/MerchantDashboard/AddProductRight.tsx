"use client";
import { Button, Chip, Grid, MenuItem, Stack, Typography } from "@mui/material";
import { CustomInput } from "../Authentication/CustomInput";
import { HighlightOff } from "@mui/icons-material";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import { AddBtn } from "./AddBtn";
import { MuiColorInput } from "mui-color-input";
import { string } from "yup";
import { useData } from "../Providers/DataProvider";

type AddProductRightProps = {
  productCategory: string;
  productSubCategory: string;
  productTag: string[];
  handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  productColor: string[];
  setProductColor: Dispatch<SetStateAction<string[]>>;
  productSize: string[];
  setProductSize: Dispatch<SetStateAction<string[]>>;
  tag: string[];
  setTag: Dispatch<SetStateAction<string[]>>;
};
export const AddProductRight = (props: AddProductRightProps) => {
  const {
    productCategory,
    productSubCategory,
    productTag,
    handleBlur,
    handleChange,
    setProductColor,
    productColor,
    setProductSize,
    productSize,
    tag,
    setTag,
  } = props;

  const [imageUrl, setImageUrl] = useState(["1", "2", "3", "4"]);
  const [value, setValue] = useState("#000000");
  const { allCategories } = useData();

  return (
    <Stack gap={3} width={1}>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <CustomInput
          label="Ерөнхий ангилал"
          type="select"
          select
          placeholder="Сонгох"
          labelWeight={600}
          name="productCategory"
          value={productCategory}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {allCategories.map((item, index) => (
            <MenuItem key={index} value={item.categoryName}>
              {item.categoryName}
            </MenuItem>
          ))}
        </CustomInput>
        <CustomInput
          label="Дэд ангилал"
          type="text"
          placeholder="Cонгох"
          labelWeight={600}
          name="productSubCategory"
          value={productSubCategory}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Stack>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
          Төрөл
        </Typography>
        <Stack fontSize={14} fontWeight={400} color={"secondary.dark"} gap={1}>
          <Stack
            flexDirection={"row"}
            flexWrap="wrap"
            gap={3}
            alignItems={"center"}
          >
            <Typography>Өнгө</Typography>
            {productColor.map((item: any, index) => (
              <Stack
                key={index}
                bgcolor={item}
                p={2}
                borderRadius={"50%"}
                position={"relative"}
                sx={{
                  aspectRatio: 1 / 1,
                }}
              >
                <Typography
                  onClick={() => {
                    const newProductColor = productColor.filter(
                      (element) => element != item
                    );
                    setProductColor(newProductColor);
                  }}
                  position={"absolute"}
                  width={1}
                  height={1}
                  top={"0%"}
                  right={"0%"}
                  color={"common.white"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"50%"}
                  sx={{
                    cursor: "pointer",
                    opacity: "0",
                    "&:hover": {
                      opacity: "1",
                      background: "#D6D8DB50",
                    },
                  }}
                  fontSize={"20px"}
                >
                  <HighlightOff fontSize="inherit" />
                </Typography>
              </Stack>
            ))}
            <AddBtn />
            <MuiColorInput
              format="hex"
              value={"#fff"}
              onChange={(event) => {
                setProductColor([...productColor, event]);
                setTag([...tag, event]);
              }}
            />
          </Stack>
          <Stack flexDirection={"row"} gap={3} alignItems={"center"}>
            <Typography>Хэмжээ</Typography>
            {productSize.map((item, index) => (
              <Stack
                key={index}
                bgcolor={"#ECEDF0"}
                width={"32px"}
                height={"32px"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                position={"relative"}
              >
                <Typography
                  onClick={() => {
                    const newProductSize = productSize.filter(
                      (element) => element != item
                    );
                    setProductSize(newProductSize);
                  }}
                  position={"absolute"}
                  color={"secondary.light"}
                  display={"flex"}
                  width={1}
                  height={1}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"50%"}
                  bgcolor={"secondary.light"}
                  sx={{
                    cursor: "pointer",
                    opacity: "0",
                    "&:hover": {
                      opacity: "1",
                      background: "#D6D8DB",
                    },
                  }}
                  fontSize={"20px"}
                >
                  <HighlightOff fontSize="inherit" />
                </Typography>
                <Typography>{item}</Typography>
              </Stack>
            ))}
            <AddBtn />
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "fit-content" }}
        >
          <Typography color={"secondary.dark"}>Төрөл нэмэх</Typography>
        </Button>
      </Stack>
      <Stack
        flexDirection={"row"}
        bgcolor={"common.white"}
        p={3}
        borderRadius={1.5}
        gap={2}
        width={1}
        height={1}
      >
        <Stack width={1} gap={1}>
          {/* <CustomInput
            label="Таг"
            type="text"
            placeholder="Таг нэмэх..."
            labelWeight={600}
            name="productTag"
            value={productTag}
            onBlur={handleBlur}
            onChange={handleChange}
          > */}
          <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
            Таг
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            p={2}
            gap={0.5}
            border={1}
            borderRadius={1}
            bgcolor={"#F7F7F8"}
            borderColor={"#D6D8DB"}
            flexWrap={"wrap"}
            height={1}
          >
            {tag.map((item, index) => (
              <Chip
                label={item}
                onDelete={() => {
                  const newTag = tag.filter((element) => element != item);
                  setTag(newTag);
                }}
              />
            ))}
          </Stack>
          {/* </CustomInput> */}
        </Stack>
      </Stack>
    </Stack>
  );
};
