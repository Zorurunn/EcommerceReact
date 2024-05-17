import { ArrowForward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
type NextBtnProps = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const NextBtn = (props: NextBtnProps) => {
  const { disabled, onClick } = props;
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
      disableElevation={false}
      endIcon={<ArrowForward />}
      sx={{ py: "16px", px: "20px" }}
      disabled={disabled}
    >
      <Typography width={1}>Дараах</Typography>
    </Button>
  );
};
