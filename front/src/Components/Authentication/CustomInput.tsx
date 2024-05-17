"use client";
import { Search, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useState } from "react";

type CustomInputProps = {
  label: string;
  type: string;
  select?: boolean;
  placeholder?: string;
  labelWeight?: number;
};
export const CustomInput = (props: TextFieldProps & CustomInputProps) => {
  const { label, type, select, labelWeight, placeholder, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack gap={1}>
      <Typography
        fontSize={16}
        fontWeight={Boolean(labelWeight) ? labelWeight : 400}
        color={"secondary.dark"}
        noWrap
      >
        {label}
      </Typography>
      <TextField
        {...rest}
        select={select}
        placeholder={placeholder}
        type={type === "password" && showPassword ? "text" : type}
        inputProps={{
          style: {
            padding: "16px",
          },
        }}
        InputProps={{
          style: {
            backgroundColor: `${type !== "search" ? "#F7F7F8" : "#FFF"}`,
          },
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? (
                  <VisibilityOff sx={{ color: "black" }} />
                ) : (
                  <Visibility sx={{ color: "black" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: type === "search" && (
            <InputAdornment position="start">
              <IconButton
                sx={{ width: "6px", height: "6px" }}
                onClick={handleShowPassword}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {props.children}
      </TextField>
    </Stack>
  );
};
