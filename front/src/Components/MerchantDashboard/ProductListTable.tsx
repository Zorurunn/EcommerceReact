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

type ProducListTableProps = {
  searchValue: string;
  setEditId: Dispatch<SetStateAction<string>>;
};

export const ProducListTable = (props: ProducListTableProps) => {
  const { products, deleteProduct, add, setAdd } = useData();
  const { searchValue, setEditId } = props;
  const router = useRouter();

  const tableHeader = [
    "",
    "Бүтээгдэхүүн",
    "Ангилал",
    "Үнэ",
    "Үлдэгдэл",
    "Зарагдсан",
    "Нэмсэн огноо",
    "",
  ];

  return (
    <Stack mt={2} overflow={"scroll"}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((item, index) => (
                <TableCell key={index}>
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
              .filter((product) =>
                product.productName
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              )
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Checkbox color="default" />
                  </TableCell>
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
                          alt="product image"
                          fill
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
                  <TableCell align="left">{row.productCategory}</TableCell>
                  <TableCell align="left">{row.productPrice}</TableCell>
                  <TableCell align="left">{row.productStocks}</TableCell>
                  <TableCell align="left">{row.productSoldQty}</TableCell>
                  <TableCell align="left">
                    {row.createdAt.toString().slice(0, 10)}
                  </TableCell>
                  <TableCell align="left">
                    <Stack flexDirection={"row"} gap={3} color={"#1C20243D"}>
                      <DeleteOutline
                        onClick={() => deleteProduct(row._id)}
                        sx={{ cursor: "pointer" }}
                      />
                      <EditOutlined
                        onClick={() => {
                          setEditId(row._id);
                          setAdd(true);
                        }}
                        sx={{ cursor: "pointer" }}
                        color="inherit"
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
