"use client";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import {
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useData } from "../Providers/DataProvider";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setSearchValue } = useData();
  return (
    <Stack py={"19px"} bgcolor="#F7F7F8">
      <Container maxWidth="lg">
        <Stack width={1} flexDirection={"row"} justifyContent={"space-between"}>
          <Stack flexDirection={"row"} alignItems={"center"} gap={"58px"}>
            <Typography
              onClick={() => {
                router.push("/MerchantDashboard");
              }}
              fontSize={34}
              fontWeight={700}
              color={"#0D0E43"}
            >
              Ecommerce
            </Typography>
            <Stack flexDirection={"row"} gap={3} sx={{ cursor: "pointer" }}>
              <Typography
                onClick={() => {
                  router.push("/");
                }}
                color={
                  pathname.includes("Category") ? "#0D0E43" : "primary.light"
                }
              >
                Нүүр <KeyboardArrowDown />
              </Typography>
              <Typography
                onClick={() => {
                  router.push("/Category");
                }}
                color={
                  !pathname.includes("Category") ? "#0D0E43" : "primary.light"
                }
              >
                Ангилал
              </Typography>
            </Stack>
          </Stack>
          <TextField
            placeholder="Хайлт..."
            type="search"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            inputProps={{
              style: {
                padding: "14px 20px",
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
                    bgcolor={"primary.light"}
                    borderRadius={"4px"}
                    p={1.5}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography color={"#EEEFFB"}>
                      <Search />
                    </Typography>
                  </Stack>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Container>
    </Stack>
  );
};
