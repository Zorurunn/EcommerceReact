"use client";
import { ArrowBackIos, EditRoadSharp } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { AddProductLeft } from "./AddProductLeft";
import { AddProductRight } from "./AddProductRight";
import { useFormik } from "formik";
import * as yup from "yup";
import { useData } from "../Providers/DataProvider";

const validationSchema = yup.object({
  // userName: yup.string().required("Хэрэглэгчийн нэр оруулна уу!"),
});

type AddProductsProps = {
  editId: string;
};
export const AddProducts = (props: AddProductsProps) => {
  const { editId } = props;
  const { addProduct, setAdd, add, products } = useData();

  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const [productColor, setProductColor] = useState<string[]>([]);
  const [productSize, setProductSize] = useState<string[]>(["XS", "M"]);
  const [tag, setTag] = useState<string[]>([]);
  const editProduct = products.filter((product) => product._id == editId)?.[0];

  const formik = useFormik({
    initialValues: {
      productName: editProduct ? editProduct.productName : "",
      productAdditional: editProduct ? editProduct.productAdditional : "",
      productCode: editProduct ? editProduct.productCode : "",
      productPrice: editProduct ? editProduct.productPrice : 0,
      productStocks: editProduct ? editProduct.productStocks : 0,
      productCategory: editProduct ? editProduct.productCategory : "",
      productSubCategory: editProduct ? editProduct.productSubCategory : "",
      productSize: editProduct ? editProduct.productSize : [],
      productTag: editProduct ? editProduct.productTag : [],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      addProduct(
        values.productName,
        values.productAdditional,
        values.productCode,
        imageUrl,
        values.productPrice,
        values.productStocks,
        values.productCategory,
        values.productSubCategory,
        productColor,
        values.productSize,
        values.productTag,
        editId
      );
    },
  });
  return (
    <Stack width={1} height={"100%"}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        fontSize={"16px"}
        width={1}
        p={2}
        bgcolor={"common.white"}
      >
        <Stack
          onClick={() => {
            setAdd((prev) => !prev);
          }}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"secondary.dark"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <ArrowBackIos fontSize="inherit" />
          <Typography fontSize={16} ml={"18px"} fontWeight={400}>
            {!editProduct ? "Бүтээгдэхүүн нэмэх" : "Бүтээгдэхүүн шинэчлэх"}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        height={1}
        gap={3}
        padding={"34px 24px 21px 32px"}
      >
        <AddProductLeft
          productName={formik.values.productName}
          productCode={formik.values.productCode}
          productAdditional={formik.values.productAdditional}
          productPrice={formik.values.productPrice}
          productStocks={formik.values.productStocks}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          tag={tag}
          setTag={setTag}
          editProduct={editProduct}
        />
        <AddProductRight
          productCategory={formik.values.productCategory}
          productSubCategory={formik.values.productSubCategory}
          productTag={formik.values.productTag}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          productColor={productColor}
          setProductColor={setProductColor}
          productSize={productSize}
          setProductSize={setProductSize}
          tag={tag}
          setTag={setTag}
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        gap={3}
        pt={"21px"}
        pr={3}
        pb={"106px"}
        justifyContent={"end"}
      >
        <Button variant="outlined" color="secondary">
          <Typography onClick={() => alert(editId)} color={"secondary.dark"}>
            Ноорог
          </Typography>
        </Button>
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          variant="contained"
          color="secondary"
        >
          <Typography>Нийтлэх</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
