import { ChevronRight } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
type DashboardCardTitleProps = {
  title: string;
};

export const DashboardCardTitle = (props: DashboardCardTitleProps) => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
      <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
        {props.title}
      </Typography>
      <ChevronRight />
    </Stack>
  );
};
