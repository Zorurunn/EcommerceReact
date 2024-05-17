"use client";
import { CheckBox, Star } from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/material";
import { useData } from "../Providers/DataProvider";

export const FilterRating = () => {
  const { allProducts } = useData();
  const avgReview1 = allProducts.filter((item) => {
    if (item.avgStars < 1.5) {
      return item;
    }
  });
  const avgReview2 = allProducts.filter((item) => {
    if (item.avgStars >= 1.5 && item.avgStars < 2.5) {
      return item;
    }
  });
  const avgReview3 = allProducts.filter((item) => {
    if (item.avgStars >= 2.5 && item.avgStars < 3.5) {
      return item;
    }
  });
  const avgReview4 = allProducts.filter((item) => {
    if (item.avgStars >= 3.5 && item.avgStars < 4.5) {
      return item;
    }
  });
  const avgReview5 = allProducts.filter((item) => {
    if (item.avgStars >= 4.5 && item.avgStars <= 5) {
      return item;
    }
  });

  const sum1 = avgReview1.reduce((sum, currentValue) => {
    return sum + (currentValue.__v + 1);
  }, 0);
  const sum2 = avgReview2.reduce((sum, currentValue) => {
    return sum + (currentValue.__v + 1);
  }, 0);
  const sum3 = avgReview3.reduce((sum, currentValue) => {
    return sum + (currentValue.__v + 1);
  }, 0);
  const sum4 = avgReview4.reduce((sum, currentValue) => {
    return sum + (currentValue.__v + 1);
  }, 0);
  const sum5 = avgReview5.reduce((sum, currentValue) => {
    return sum + (currentValue.__v + 1);
  }, 0);
  const ratingList = [
    { star: 5, avg: sum5 },
    { star: 4, avg: sum4 },
    { star: 3, avg: sum3 },
    { star: 2, avg: sum2 },
    { star: 1, avg: sum1 },
  ];

  return (
    <Stack gap={"5px"}>
      <Stack>
        <Typography
          color={"#151875"}
          fontSize={20}
          fontWeight={800}
          borderBottom={1}
          borderColor={"common.black"}
          sx={{ width: "fit-content" }}
        >
          Үнэлгээ
        </Typography>
      </Stack>
      {ratingList.map((item, index) => (
        <Stack
          key={index}
          flexDirection={"row"}
          alignItems={"center"}
          color={"#FFC107"}
        >
          <Checkbox
            defaultChecked
            sx={{
              color: "#FFC107",
              "&.Mui-checked": {
                color: "#FFC107",
              },
            }}
          />
          {ratingList.map((i, ind) => (
            <Star
              key={i.star}
              style={{ opacity: `${item.star < ind + 1 ? 0.2 : 1}` }}
              color={item.star < ind + 1 ? "secondary" : "inherit"}
            />
          ))}
          <Typography
            color={"common.black"}
            fontSize={12}
            fontWeight={800}
            ml={0.5}
          >
            {"("}
            {item.avg}
            {")"}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
