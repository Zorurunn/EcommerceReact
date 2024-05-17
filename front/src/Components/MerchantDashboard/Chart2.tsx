import {
  LinearProgress,
  Stack,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#121316" : "#1C2024",
  },
}));
type Chart2Props = {
  location: string;
  percent: number;
};

export const Chart2 = (props: Chart2Props) => {
  const { location, percent } = props;
  return (
    <Stack>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={3}
      >
        <Typography mr={3} fontSize={14} width={0.2}>
          {location}
        </Typography>
        <Stack
          width={0.8}
          flexDirection={"row"}
          gap={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack width={0.8}>
            <BorderLinearProgress variant="determinate" value={percent} />
          </Stack>
          <Typography ml={1} fontSize={14} fontWeight={400} color={"#121316"}>
            {percent + "%"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
