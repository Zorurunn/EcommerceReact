"use client";
import * as React from "react";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useData } from "../Providers/DataProvider";
import {
  Add,
  DeleteForeverOutlined,
  DeleteOutline,
  HighlightOffOutlined,
  Remove,
  RemoveShoppingCart,
  RemoveShoppingCartOutlined,
} from "@mui/icons-material";
type CartProps = {};

export const Cart = (props: CartProps) => {
  const { cartProduct, setCartProduct, numberFormatter } = useData();
  const {} = props;

  const tableHeader = ["Бүтээгдэхүүн", "Үнэ", "Тоо ширхэг", "Нийт", ""];

  return (
    <Stack mt={2}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((item, index) => (
                <TableCell key={index} align="center">
                  <Typography fontSize={20} fontWeight={800} color={"#1D3178"}>
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {cartProduct.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Stack flexDirection={"row"} alignItems={"center"} gap={1.5}>
                    <Stack
                      position={"relative"}
                      overflow={"hidden"}
                      height={"87px"}
                      sx={{ aspectRatio: 1 / 1 }}
                    >
                      <Image
                        src={row.productImage[0]}
                        alt="product image"
                        style={{ objectFit: "cover" }}
                        fill
                        sizes="small"
                        priority={true}
                      />
                    </Stack>
                    <Stack gap={0.5}>
                      <Typography
                        fontSize={14}
                        fontWeight={800}
                        color={"secondary.dark"}
                      >
                        {row.productName}
                      </Typography>
                      <Stack
                        flexDirection={"row"}
                        fontSize={12}
                        fontWeight={400}
                        color={"#5E6166"}
                        gap={1}
                      >
                        {row.productColor.map((item, index) => (
                          <Stack
                            key={index}
                            p={0.5}
                            borderRadius={"50%"}
                            bgcolor={item}
                          ></Stack>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={14} fontWeight={700} color={"#151875"}>
                    {numberFormatter.format(row.productPrice)}
                    {" ₮"}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography
                      onClick={() => {
                        const newCart = cartProduct.map((element) => {
                          if (element.productId == row.productId) {
                            if (element.orderQty > 1) {
                              element.orderQty -= 1;
                            }
                            return element;
                          } else {
                            return element;
                          }
                        });
                        setCartProduct(newCart);
                      }}
                      sx={{ cursor: "pointer" }}
                      bgcolor={"#E7E7EF"}
                      color={"#BEBFC2"}
                    >
                      <Remove fontSize="small" color="inherit" />
                    </Typography>
                    <Typography
                      color="#BEBFC2"
                      bgcolor={"#F0EFF2"}
                      fontSize={16}
                      fontWeight={800}
                      px={2}
                    >
                      {row.orderQty}
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      bgcolor={"#E7E7EF"}
                      color={"#BEBFC2"}
                    >
                      <Add
                        onClick={() => {
                          const newCart = cartProduct.map((element) => {
                            if (element.productId == row.productId) {
                              element.orderQty += 1;
                              return element;
                            } else {
                              return element;
                            }
                          });
                          setCartProduct(newCart);
                        }}
                        fontSize="small"
                        color="inherit"
                      />
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={14} fontWeight={700} color={"#151875"}>
                    {numberFormatter.format(row.productPrice * row.orderQty)}
                    {" ₮"}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    onClick={() => {
                      const newCart = cartProduct.filter(
                        (item) => item.productId != row.productId
                      );
                      setCartProduct(newCart);
                    }}
                    fontSize={14}
                    fontWeight={700}
                    color={"#A1A8C1"}
                    sx={{
                      "&:hover": {
                        color: "success.main",
                      },
                    }}
                  >
                    <HighlightOffOutlined fontSize="small" />
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
