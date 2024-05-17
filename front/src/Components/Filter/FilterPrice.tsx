"use client";
import { Search } from "@mui/icons-material";
import {
  Checkbox,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useData } from "../Providers/DataProvider";
const categories = [
  "0₮-200'000₮",
  "200'000₮-400'000₮",
  "400'000₮-600'000₮",
  "600'000₮-800'000₮",
  "800'000₮-1'000'000₮",
  "1'000'000₮+",
];
export const FilterPrice = () => {
  const { setSearchValue } = useData();
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
          Үнэ
        </Typography>
        {categories.map((item, index) => (
          <Stack alignItems={"center"} key={index} flexDirection={"row"}>
            <Checkbox
              defaultChecked
              disableRipple
              sx={{
                color: "#FFDBF1",
                "&.Mui-checked": {
                  color: "#FF3EB2",
                },
                "&:hover": { bgcolor: "transparent" },
              }}
            />
            <Typography fontSize={16} fontWeight={400} color={"#7E81A2"}>
              {item}
            </Typography>
          </Stack>
        ))}
        <TextField
          placeholder="Хайлт..."
          type="search"
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          inputProps={{
            style: {
              padding: "4px 20px",
              paddingRight: "40px",
            },
          }}
          InputProps={{
            style: {
              backgroundColor: "#FFF",
              position: "relative",
            },
            endAdornment: (
              <InputAdornment position="end">
                <Stack
                  position={"absolute"}
                  right={0}
                  bgcolor={"common.white"}
                  borderRadius={"4px"}
                  p={0.25}
                  sx={{ cursor: "pointer" }}
                >
                  <Typography color={"#BCBDDB"}>
                    <Search />
                  </Typography>
                </Stack>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
