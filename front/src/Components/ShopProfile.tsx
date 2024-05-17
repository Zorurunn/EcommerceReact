import { Check } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
const profile = [
  { text: "Дэлгүүрийн төрлөө оруулна уу", btnText: "Дэлгүүрийн төрөл" },
  { text: "Эхний бүтээгдэхүүнээ нэмнэ үү", btnText: "Бүтээгдэхүүн нэмэх" },
  { text: "Хүргэлтийг тохируулна уу", btnText: "Хүргэлт тохируулах" },
];
export const ShopProfile = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"common.white"}
      padding={"32px 29px"}
      borderRadius={"12px"}
      gap={"20px"}
      width={"800px"}
    >
      <Typography
        width={1}
        fontSize={18}
        fontWeight={600}
        color={"secondary.dark"}
      >
        Дэлгүүрийн профайл үүсгэх
      </Typography>
      <Stack gap={1}>
        {profile.map((item, index) => (
          <Stack
            key={index}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={1}
            borderColor={"#ECEDF0"}
            borderRadius={1}
            padding={"8px 12px 8px"}
          >
            <Stack py={1} px={2}>
              <Check color="success" />
            </Stack>
            <Typography width={"100%"}>{item.text}</Typography>
            <Button variant="outlined" color="secondary">
              <Typography width={1}>{item.btnText}</Typography>
            </Button>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
