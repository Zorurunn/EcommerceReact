import Image from "next/image";
import { CustomInput } from "./CustomInput";
import { NextBtn } from "../MerchantDashboard/NextBtn";
import { Divider, Stack, Typography } from "@mui/material";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { SetFlag } from "yup";
type SignUpProps = {
  setStep: Dispatch<SetStateAction<number>>;
  userName: string;
  email: string;
  password: string;
  repassword: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  errorEmail?: boolean;
  errorName?: boolean;
  errorPassword?: boolean;
  errorRepassword?: boolean;
  helperTextEmail?: any;
  helperTextName?: any;
  helperTextPassword?: any;
  helperTextRepassword?: any;
};
const loginSelect = [
  { logo: "/google.png", text: "Google-ээр нэвтрэх" },
  { logo: "/microsoft.png", text: "Microsoft-оор нэвтрэх" },
  { logo: "/apple.png", text: "Apple-аар нэвтрэх" },
];

export const SignUp = (props: SignUpProps) => {
  const {
    setStep,
    email,
    userName,
    password,
    repassword,
    handleChange,
    handleBlur,
    errorEmail,
    errorName,
    errorPassword,
    errorRepassword,
    helperTextEmail,
    helperTextName,
    helperTextPassword,
    helperTextRepassword,
  } = props;

  const disableStatus =
    errorEmail ||
    errorName ||
    errorPassword ||
    errorRepassword ||
    !Boolean(userName) ||
    !Boolean(email) ||
    !Boolean(password) ||
    !Boolean(repassword);

  return (
    <Stack
      width="440px"
      bgcolor={"common.white"}
      border={1}
      borderRadius={2}
      borderColor={"#ECEDF0"}
      p={5}
      gap={3}
    >
      <Typography
        textAlign={"center"}
        fontSize={32}
        fontWeight={700}
        color={"secondary.main"}
      >
        Бүртгүүлэх
      </Typography>
      <Stack gap={2}>
        <CustomInput
          label="Таны имэйл"
          placeholder="Имэйл"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorEmail}
          helperText={helperTextEmail}
        />
        <CustomInput
          label="Таны нэр"
          placeholder="Нэр"
          type="text"
          name="userName"
          value={userName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorName}
          helperText={helperTextName}
        />
        <CustomInput
          label="Нууц үг"
          placeholder="Нууц үг оруулах"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorPassword}
          helperText={helperTextPassword}
        />
        <CustomInput
          label="Нууц үг давтах"
          placeholder="Нууц үг давтах"
          type="password"
          name="repassword"
          value={repassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorRepassword}
          helperText={helperTextRepassword}
        />
        <NextBtn
          onClick={() => {
            setStep(0);
          }}
          disabled={disableStatus}
        />
        <Divider sx={{ marginY: "16px" }} />
        <Stack gap={2}>
          {loginSelect.map((item, index) => (
            <Stack
              key={index}
              flexDirection={"row"}
              borderRadius={1}
              bgcolor={"#1C20240A"}
              py={1.5}
              px={2}
              gap={0.5}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <Stack position={"relative"} width={24} height={24}>
                <Image src={item.logo} alt="google logo" fill sizes="small" />
              </Stack>
              <Typography py={0.25} px={0.5}>
                {item.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Divider sx={{ marginY: "16px" }} />
        <Stack
          flexDirection={"row"}
          fontSize={14}
          fontWeight={400}
          py={1}
          gap={0.5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography color={"#525252"}>Бүртгэлтэй юу?</Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            className="underline underline-offset-4 cursor-pointer "
          >
            Нэвтрэх
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
