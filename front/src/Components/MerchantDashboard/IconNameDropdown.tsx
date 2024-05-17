import { Stack, Typography } from "@mui/material";
import {
  AttachMoney,
  CalendarToday,
  CategoryOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";

type IconNameDropdownProps = {
  icon: string;
  name: string;
};
export const IconNameDropdown = (props: IconNameDropdownProps) => {
  const { icon, name } = props;
  return (
    <Stack
      flexDirection={"row"}
      border={1}
      borderRadius={1}
      borderColor={"#ECEDF0"}
      padding={"8px 12px"}
      gap={1}
      sx={{ cursor: "pointer" }}
    >
      {icon == "category" && <CategoryOutlined />}
      {icon == "money" && <AttachMoney />}
      {icon == "calendar" && <CalendarToday />}
      <Typography>{name}</Typography>
      <KeyboardArrowDown />
    </Stack>
  );
};
