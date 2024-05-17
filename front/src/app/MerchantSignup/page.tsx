"use client";
import { SignUp } from "@/Components/Authentication/SignUp";
import { Steps } from "@/Components/Authentication/Steps";
import { MerchantName } from "@/Components/MerchantDashboard/MerchantName";
import { RegionInfo } from "@/Components/RegionInfo";
import { MerchExp } from "@/Components/MerchantDashboard/MerchExp";
import { Stack, StepConnector, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/Components/Providers/AuthProvider";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  userName: yup.string().required("Хэрэглэгчийн нэр оруулна уу!"),
  email: yup
    .string()
    .email("Хүчинтэй имэйл оруулна уу!")
    .required("Имэйл оруулна уу!"),
  password: yup.string().required("Нууц үг оруулна уу!"),
  repassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Нууц үг адил биш байна!")
    .required("Нууц үгээ давтаж оруулна уу!"),
  city: yup.string().required("Хаягаа оруулна уу."),
  district: yup.string().required("Аймаг/Дүүрэг оруулна уу."),
  khoroo: yup.string().required("Хороо оруулна уу."),
  experience: yup.string().required("Туршлага сонгоно уу."),
  merchType: yup.string().required("Худалдах барааны төрөл сонгоно уу."),
});

export default function Signup() {
  const [step, setStep] = useState(-1);
  const { signUp } = useAuth();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      merchName: "",
      city: "",
      district: "",
      khoroo: "",
      experience: "",
      merchType: "",
      password: "",
      repassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(
        values.userName,
        values.email,
        values.merchName,
        values.city,
        values.district,
        values.khoroo,
        values.experience,
        values.merchType,
        values.password
      );
      setStep(-1);
    },
  });
  return (
    <Stack
      sx={{ height: "100vh" }}
      justifyContent={step < 0 ? "space-between" : "start"}
      flex={1}
    >
      <Stack
        mt={"44px"}
        ml={"44px"}
        onClick={() => {
          router.push("/");
        }}
        sx={{ cursor: "pointer" }}
      >
        <Image
          alt="logo"
          src="/pinecone.png"
          priority={false}
          width={194}
          height={32}
        />
      </Stack>
      {Boolean(step >= 0) && (
        <Stack width={1} alignItems={"center"}>
          <Stack mt={"41px"} minWidth={"792px"}>
            <Steps step={step} />
          </Stack>
        </Stack>
      )}
      {Boolean(step < 0) && (
        <Stack alignItems={"center"} width={1} mt={"58px"}>
          <SignUp
            setStep={setStep}
            userName={formik.values.userName}
            email={formik.values.email}
            password={formik.values.password}
            repassword={formik.values.repassword}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            errorEmail={formik.touched.email && Boolean(formik.errors.email)}
            errorName={
              formik.touched.userName && Boolean(formik.errors.userName)
            }
            errorPassword={
              formik.touched.password && Boolean(formik.errors.password)
            }
            errorRepassword={
              formik.touched.repassword && Boolean(formik.errors.repassword)
            }
            helperTextEmail={formik.touched.email && formik.errors.email}
            helperTextName={formik.touched.userName && formik.errors.userName}
            helperTextPassword={
              formik.touched.password && formik.errors.password
            }
            helperTextRepassword={
              formik.touched.repassword && formik.errors.repassword
            }
          />
        </Stack>
      )}
      {Boolean(step == 0) && (
        <MerchantName
          setStep={setStep}
          merchName={formik.values.merchName}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          errorMerchName={
            formik.touched.merchName && Boolean(formik.errors.merchName)
          }
          helperTextMerchName={
            formik.touched.merchName && formik.errors.merchName
          }
        />
      )}
      {Boolean(step == 1) && (
        <RegionInfo
          setStep={setStep}
          city={formik.values.city}
          district={formik.values.district}
          khoroo={formik.values.khoroo}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          errorCity={formik.touched.city && Boolean(formik.errors.city)}
          errorDistrict={
            formik.touched.district && Boolean(formik.errors.district)
          }
          errorKhoroo={formik.touched.khoroo && Boolean(formik.errors.khoroo)}
          helperTextCity={formik.touched.city && formik.errors.city}
          helperTextDistrict={formik.touched.district && formik.errors.district}
          helperTextKhoroo={formik.touched.khoroo && formik.errors.khoroo}
        />
      )}
      {Boolean(step == 2) && (
        <MerchExp
          setStep={setStep}
          exp={formik.values.experience}
          merchType={formik.values.merchType}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleSubmit={formik.submitForm}
          errorExp={
            formik.touched.experience && Boolean(formik.errors.experience)
          }
          errorMerchType={
            formik.touched.merchType && Boolean(formik.errors.merchType)
          }
          helperTextExp={formik.touched.experience && formik.errors.experience}
          helperTextMerchType={
            formik.touched.merchType && formik.errors.merchType
          }
        />
      )}
      {Boolean(step < 0) && (
        <Typography
          textAlign={"center"}
          fontSize={12}
          fontWeight={400}
          color={"#1C20243D"}
          mb={"14px"}
          py={2}
          mt={"86px"}
        >
          © 2023 Pinecone
        </Typography>
      )}
    </Stack>
  );
}
