"use client";
import * as React from "react";
import {
  Checkbox,
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
import { useData } from "../Providers/DataProvider";
import {
  CheckBox,
  Delete,
  DeleteOutline,
  EditOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

type TopSalesProps = {};

export const TopSales = (props: TopSalesProps) => {
  const { products, numberFormatter } = useData();

  const tableHeader = ["№", "Бүтээгдэхүүн", "Зарагдсан", "Үнэ"];

  return (
    <Stack mt={2} overflow={"scroll"}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((item, index) => (
                <TableCell align="center" key={index}>
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    color={"secondary.light"}
                  >
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {products
              .sort((a, b) => b.productSoldQty - a.productSoldQty)
              .filter((product, index) => index < 20)
              .map((row, number) => (
                <TableRow
                  key={number}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{number + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      gap={1.5}
                    >
                      <Stack
                        position={"relative"}
                        borderRadius={"50%"}
                        overflow={"hidden"}
                        height={"50px"}
                        sx={{ aspectRatio: 1 / 1 }}
                      >
                        <Image
                          src={row.productImage[0]}
                          style={{ objectFit: "cover" }}
                          alt="product image"
                          fill
                          sizes="small"
                        />
                      </Stack>
                      <Stack gap={0.5}>
                        <Typography
                          fontSize={14}
                          fontWeight={600}
                          color={"secondary.dark"}
                        >
                          {row.productName}
                        </Typography>
                        <Typography
                          fontSize={12}
                          fontWeight={400}
                          color={"#5E6166"}
                        >
                          {row._id.slice(-8)}
                        </Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">{row.productSoldQty}</TableCell>
                  <TableCell align="right">
                    {numberFormatter.format(row.productPrice)}
                    {"₮"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
