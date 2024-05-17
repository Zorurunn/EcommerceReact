"use client";
import {
  Email,
  Favorite,
  PersonOutline,
  PhoneInTalkOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useData } from "../Providers/DataProvider";
import { useRouter } from "next/navigation";
import { useAuth } from "../Providers/AuthProvider";

export const Header = () => {
  const { cartProduct } = useData();
  const { user } = useAuth();
  const router = useRouter();
  return (
    <Stack bgcolor={"primary.main"} py={"14px"} width={1}>
      <Container maxWidth="lg">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Stack flexDirection={"row"} gap={"66px"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={1.25}
              color={"#F1F1F1"}
            >
              <Email fontSize="small" />
              <Typography fontSize={16} fontWeight={600}>
                info@ecommerce.mn
              </Typography>
            </Stack>

            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={1.25}
              color={"#F1F1F1"}
            >
              <PhoneInTalkOutlined fontSize="small" />
              <Typography fontSize={16} fontWeight={600}>
                info@ecommerce.mn
              </Typography>
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"} gap={"29px"}>
            <Stack
              onClick={() => {
                router.push("/Signin");
              }}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"3px"}
              fontSize={"24px"}
              color={"#F1F1F1"}
              sx={{ cursor: "pointer" }}
            >
              <Typography fontSize={16} fontWeight={600}>
                {user ? user.userName : "Нэвтрэх"}
              </Typography>
              <PersonOutline fontSize="small" />
            </Stack>

            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={"3px"}
              fontSize={"24px"}
              color={"#F1F1F1"}
            >
              <Typography fontSize={16} fontWeight={600}>
                Хадгалах
              </Typography>
              <Favorite fontSize="small" />
            </Stack>
            <IconButton
              size="small"
              onClick={() => {
                router.push("/ShoppingCart");
              }}
            >
              <Badge badgeContent={cartProduct.length} color="warning">
                <Typography color={"#f1f1f1"}>
                  <ShoppingCartOutlined fontSize="medium" color="inherit" />
                </Typography>
              </Badge>
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
};
