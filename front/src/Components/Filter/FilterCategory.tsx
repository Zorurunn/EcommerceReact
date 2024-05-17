import { Checkbox, Stack, Typography } from "@mui/material";
import { getEnabledCategories } from "trace_events";
import { useData } from "../Providers/DataProvider";

export const FilterCategory = () => {
  const { allCategories } = useData();
  return (
    <Stack gap={0.8}>
      <Stack>
        <Typography
          color={"#151875"}
          fontSize={20}
          fontWeight={800}
          borderBottom={1}
          borderColor={"common.black"}
          sx={{ width: "fit-content" }}
        >
          Ангилал
        </Typography>
        {allCategories.map((item, index) => (
          <Stack alignItems={"center"} key={index} flexDirection={"row"}>
            <Checkbox
              defaultChecked
              sx={{
                color: "#FFDBF1",
                "&.Mui-checked": {
                  color: "#FF3EB2",
                },
              }}
            />
            <Typography fontSize={16} fontWeight={400} color={"#7E81A2"}>
              {item.categoryName}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
