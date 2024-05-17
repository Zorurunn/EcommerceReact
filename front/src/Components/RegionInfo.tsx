import { MenuItem, Stack, Typography } from "@mui/material";
import { CustomInput } from "./Authentication/CustomInput";
import { LeftButton } from "./MerchantDashboard/Leftbutton";
import { NextBtn } from "./MerchantDashboard/NextBtn";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

type RegionInfoProps = {
  setStep: Dispatch<SetStateAction<number>>;
  city: string;
  district: string;
  khoroo: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  errorCity?: boolean;
  errorDistrict?: boolean;
  errorKhoroo?: boolean;
  helperTextCity?: any;
  helperTextDistrict?: any;
  helperTextKhoroo?: any;
};
const districts = [
  "Баянзүрх дүүрэг",
  "Баянгол дүүрэг",
  "Чингэлтэй дүүрэг",
  "Сүхбаатар дүүрэг",
  "Хан-Уул дүүрэг",
  "Сонгинохайрхан дүүрэг",
];
const cities = [
  "Улаанбаатар",
  "Архангай",
  "Баян-Өлгий",
  "Баянхонгор",
  "Булган",
  "Говь-Алтайн",
  "Говьсүмбэр",
  "Дархан-Уул",
  "Дорноговь",
  "Дорнод",
  "Дундговь",
  "Завхан",
  "Орхон",
  "Өвөрхангай",
  "Өмнөговь",
  "Сүхбаатар",
  "Сэлэнгэ",
  "Төв",
  "Увс",
  "Ховд",
  "Хөвсгөл",
  "Хэнтий",
];

export const RegionInfo = (props: RegionInfoProps) => {
  const {
    setStep,
    district,
    city,
    khoroo,
    handleBlur,
    handleChange,
    errorCity,
    errorDistrict,
    errorKhoroo,
    helperTextCity,
    helperTextDistrict,
    helperTextKhoroo,
  } = props;
  const disableStatus =
    errorCity ||
    errorDistrict ||
    errorKhoroo ||
    !Boolean(city) ||
    !Boolean(district) ||
    !Boolean(khoroo);
  return (
    <Stack
      position={"absolute"}
      sx={{ transform: "translate(-50%,-50%)" }}
      top={"50%"}
      left={"50%"}
      maxWidth={"452px"}
      borderRadius={4}
      p={"24px"}
      gap={2}
      bgcolor={"common.white"}
    >
      <Typography fontSize={32} fontWeight={700} minWidth={"404px"}>
        Бүс нутгийн мэдээлэл
      </Typography>
      <Stack gap={"56px"}>
        <Stack gap={1}>
          <CustomInput
            label="Хот/Аймаг"
            type="select"
            select={true}
            defaultValue="default"
            name="city"
            value={city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorCity}
            helperText={helperTextCity}
          >
            <MenuItem value="default" disabled>
              <Typography color={"text.disabled"}>Сонгох</Typography>
            </MenuItem>
            {cities.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </CustomInput>
          <CustomInput
            label="Сум/Дүүрэг"
            type="text"
            select={true}
            defaultValue="default"
            name="district"
            value={district}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorDistrict}
            helperText={helperTextDistrict}
          >
            <MenuItem value="default" disabled>
              <Typography color={"text.disabled"}>Сум/Дүүрэг</Typography>
            </MenuItem>
            {districts.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </CustomInput>
          <CustomInput
            label="Хороо"
            placeholder="Хороо"
            type="text"
            name="khoroo"
            value={khoroo}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorKhoroo}
            helperText={helperTextKhoroo}
          />
        </Stack>

        <Stack justifyContent={"space-between"} flexDirection={"row"}>
          <Stack
            onClick={() => {
              setStep(0);
            }}
          >
            <LeftButton />
          </Stack>
          <NextBtn
            onClick={() => {
              setStep(2);
            }}
            disabled={disableStatus}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
