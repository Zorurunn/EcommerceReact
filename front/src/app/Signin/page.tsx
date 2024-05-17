"use client";
import { SignUp } from "@/Components/Authentication/SignUp";
import { Steps } from "@/Components/Authentication/Steps";
import { MerchantName } from "@/Components/MerchantDashboard/MerchantName";
import { RegionInfo } from "@/Components/RegionInfo";
import { MerchExp } from "@/Components/MerchantDashboard/MerchExp";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/Components/Providers/AuthProvider";
import { SignIn } from "@/Components/Authentication/SignIn";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Хүчинтэй имэйл оруулна уу!")
    .required("Имэйл оруулна уу!"),
  password: yup.string().required("Нууц үг оруулна уу!"),
});

export default function Signin() {
  const { signIn, user } = useAuth();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values.email, values.password);
    },
  });
  return (
    <Stack sx={{ height: "100vh" }} justifyContent={"space-between"}>
      {/* <Stack mt={"44px"} ml={"44px"}>
        <Image
          alt="logo"
          src="/pinecone.png"
          priority={false}
          width={194}
          height={32}
        />
      </Stack> */}

      <Stack alignItems={"center"} width={1} mt={"58px"}>
        <SignIn
          email={formik.values.email}
          password={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleSubmit={formik.submitForm}
          errorEmail={formik.touched.email && Boolean(formik.errors.email)}
          errorPassword={
            formik.touched.password && Boolean(formik.errors.password)
          }
          helperTextEmail={formik.touched.email && formik.errors.email}
          helperTextPassword={formik.touched.password && formik.errors.password}
        />
      </Stack>
      {/* <Typography
        textAlign={"center"}
        fontSize={12}
        fontWeight={400}
        color={"#1C20243D"}
        mb={"14px"}
        py={2}
        mt={"86px"}
      >
        © 2023 Pinecone
      </Typography> */}
    </Stack>
  );
}
