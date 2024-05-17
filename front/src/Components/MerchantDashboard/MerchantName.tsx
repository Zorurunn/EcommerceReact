import { Stack, TextField, Typography } from "@mui/material";
import { CustomInput } from "../Authentication/CustomInput";
import { LeftButton } from "./Leftbutton";
import { NextBtn } from "./NextBtn";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
type MerchantNameProps = {
  setStep: Dispatch<SetStateAction<number>>;
  merchName: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  errorMerchName?: boolean;
  helperTextMerchName?: any;
};
export const MerchantName = (props: MerchantNameProps) => {
  const {
    setStep,
    merchName,
    handleBlur,
    handleChange,
    errorMerchName,
    helperTextMerchName,
  } = props;
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
        Дэлгүүрийн мэдээлэл
      </Typography>
      <Stack gap={"56px"}>
        <CustomInput
          label="Танай дэлгүүрийн нэр юу вэ?"
          placeholder="Дэлгүүрийн нэр"
          type="text"
          name="merchName"
          value={merchName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorMerchName}
          helperText={helperTextMerchName}
        />
        <Stack justifyContent={"space-between"} flexDirection={"row"}>
          <Stack
            onClick={() => {
              setStep(-1);
            }}
          >
            <LeftButton />
          </Stack>

          <NextBtn
            onClick={() => {
              setStep(1);
            }}
            disabled={errorMerchName || !Boolean(merchName)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
