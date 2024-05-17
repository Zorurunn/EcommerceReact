"use client";
import { ChevronRight } from "@mui/icons-material";
import {
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function createTable(
  title: string,
  name: string,
  email: string,
  date: string,
  time: string,
  paid: string,
  status: string
) {
  return { title, name, email, date, time, paid, status };
}

const tables = [
  createTable(
    "#12345678",
    "Zoloo soko",
    "Zoloosoko@gmail.com",
    "12,000₮",
    "12,000₮",
    "2023-01-09",
    ""
  ),
];
export const Incometable = () => {
  const [menu, setMenu] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMenu(event.target.value as string);
  };
  return (
    <Stack
      bgcolor={"common.white"}
      borderRadius={"12px"}
      border={1}
      borderColor={"#ECEDF0"}
      overflow={"hidden"}
    >
      <Table sx={{ boxShadow: 1, borderRadius: "12px" }}>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#3F4145",
                }}
              >
                Захиалгын ID дугаар
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#3F4145",
                }}
              >
                Захиалагч
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#3F4145",
                }}
              >
                Төлбөр
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#3F4145",
                }}
              >
                Огноо
              </Typography>
            </TableCell>
          </TableRow>
          {tables.map((table) => (
            <TableRow
              key={table.title}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell scope="row" component="th">
                {table.title}
              </TableCell>
              <TableCell>
                <Stack>
                  <Typography fontWeight={600}>{table.name}</Typography>
                  <Typography color={"#3F4145"}>{table.email}</Typography>
                </Stack>
              </TableCell>
              <TableCell>{table.date}</TableCell>
              <TableCell>{table.paid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};
