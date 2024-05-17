import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useData } from "../Providers/DataProvider";
import { useState } from "react";
const validationSchema = yup.object({
  comment: yup.string(),
});
type userType = {
  userName: string;
  email: string;
  merchName: string;
  address: { city: string; district: string; khoroo: string };
  experience: string;
  merchType: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

type CommentType = {
  userId: userType;
  productId: string;
  comment: string;
  star: number;
  createdAt: object;
  updatedAt: object;
};

type ProductRatingProps = {
  productId?: string;
  productRating?: number;
  comments?: CommentType[];
  reviewCount?: number;
};

export const ProductRating = (props: ProductRatingProps) => {
  const { productId, comments, productRating, reviewCount } = props;
  const { addReview } = useData();
  const [star, setStar] = useState(0);
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addReview(productId || "", star, values.comment);
    },
  });

  return (
    <Stack>
      <Stack gap={3}>
        <Typography gap={3} color={"#1D3178"} fontSize={18} fontWeight={800}>
          Үнэлгээ нэмэх
        </Typography>
        <Stack
          width={1}
          py={6}
          px={3}
          gap={"41px"}
          borderRadius={"8px"}
          bgcolor={"common.white"}
        >
          <Stack width={1} borderBottom={2} borderColor={"#BFC6E0"}>
            <Rating
              name="rating"
              value={star}
              onChange={(event, newValue) => {
                setStar(newValue || 0);
              }}
            />
          </Stack>
          <Stack width={1} borderBottom={2} borderColor={"#BFC6E0"}>
            <TextField
              type="text"
              placeholder="Сэтгэгдэл бичих"
              name="comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Stack>
          <Stack width={1} alignItems={"end"}>
            <Button
              onClick={() => {
                formik.handleSubmit();
              }}
              color="success"
              disabled={!star || !formik.values.comment}
              variant="contained"
              sx={{ width: "fit-content" }}
            >
              <Typography>Үнэлэх</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Box display={"flex"} flexDirection={"column"} mt={6}>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography mr={2} fontSize={18} fontWeight={800} color={"#1D3178"}>
            Нийт үнэлгээ
          </Typography>
          <Rating value={productRating} readOnly />
          <Typography ml={0.5}>
            {"("}
            {reviewCount}
            {")"}
          </Typography>
        </Stack>
        <Stack
          width={1}
          py={6}
          px={3}
          mt={3}
          gap={"41px"}
          borderRadius={"8px"}
          bgcolor={"common.white"}
        >
          {comments?.map((item, index) => (
            <Stack
              key={index}
              borderBottom={2}
              pb={4}
              borderColor={"#BFC6E0"}
              sx={{ borderStyle: "dashed" }}
            >
              <Stack width={1}>
                <Rating name="rating" readOnly value={item.star} size="small" />
              </Stack>
              <Typography
                mt={4}
                mb={1}
                color={"#1D3178"}
                fontSize={18}
                fontWeight={800}
              >
                {Boolean(item.userId) ? item.userId.userName : "Зочин"}
              </Typography>
              <Stack width={1}>
                <Typography color={"#9295AA"} fontSize={17.67} fontWeight={700}>
                  {item.comment}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};
