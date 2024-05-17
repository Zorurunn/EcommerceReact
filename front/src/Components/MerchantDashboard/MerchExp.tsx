import {
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { CustomInput } from "../Authentication/CustomInput";
import { LeftButton } from "./Leftbutton";
import { NextBtn } from "./NextBtn";
import {
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { FormikProps } from "formik";

type MerchExpProps = {
  setStep: Dispatch<SetStateAction<number>>;
  exp: string;
  merchType: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  errorExp?: boolean;
  errorMerchType?: boolean;
  helperTextExp?: any;
  helperTextMerchType?: any;
};
const experience = ["Тийм", "Үгүй"];
const types = ["Electronics", "Clothes", "Home decor"];
export const MerchExp = (props: MerchExpProps) => {
  const {
    setStep,
    exp,
    merchType,
    handleBlur,
    handleChange,
    handleSubmit,
    errorExp,
    errorMerchType,
    helperTextExp,
    helperTextMerchType,
  } = props;

  const disableStatus =
    errorExp || errorMerchType || !Boolean(exp) || !Boolean(merchType);
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
      color={"secondary.dark"}
    >
      <Typography fontSize={32} fontWeight={700} minWidth={"404px"}>
        Жоохон танилцья
      </Typography>
      <Typography fontSize={16} fontWeight={400}>
        Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
      </Typography>
      <Stack gap={"56px"}>
        <Stack gap={1}>
          <CustomInput
            label="Та борлуулалт хийж байсан туршлагатай юу?"
            placeholder={"Сонгох"}
            type="select"
            select={true}
            defaultValue="default"
            name="experience"
            value={exp}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorExp}
            helperText={helperTextExp}
          >
            <MenuItem value="default" disabled>
              <Typography color={"text.disabled"}>Сонгох</Typography>
            </MenuItem>
            {experience.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </CustomInput>

          <CustomInput
            label="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
            placeholder={"Сонгох"}
            type="text"
            select={true}
            defaultValue="default"
            name="merchType"
            value={merchType}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorMerchType}
            helperText={helperTextMerchType}
          >
            <MenuItem value="default" disabled>
              <Typography color={"text.disabled"}>Сонгох</Typography>
            </MenuItem>
            {types.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </CustomInput>
        </Stack>

        <Stack justifyContent={"space-between"} flexDirection={"row"}>
          <Stack
            onClick={() => {
              setStep(1);
            }}
          >
            <LeftButton />
          </Stack>

          <NextBtn onClick={handleSubmit} disabled={disableStatus} />
        </Stack>
      </Stack>
    </Stack>
  );
};
