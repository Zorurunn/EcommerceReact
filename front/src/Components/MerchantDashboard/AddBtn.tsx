import { Add } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export const AddBtn = (props: PropsWithChildren) => {
  return (
    <Stack
      position={"relative"}
      bgcolor={"#ECEDF0"}
      p={2}
      borderRadius={"50%"}
      sx={{ cursor: "pointer" }}
    >
      <Add
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
        }}
        fontSize="small"
      >
        {props.children}
      </Add>
    </Stack>
  );
};
