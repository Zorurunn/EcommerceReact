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
    "2023-01-09",
    "10:58",
    "12,000₮",
    "Хүргэгдсэн"
  ),
];
export const Ordertable = () => {
  const [menu, setMenu] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMenu(event.target.value as string);
  };
  return (
    <Stack>
      <Table sx={{ boxShadow: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography fontSize={20} fontWeight={700} color={"#121316"}>
                Захиалга
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow style={{ backgroundColor: "#F7F7F8" }}>
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
                Үйлчлүүлэгч
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
            <TableCell>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#3F4145",
                }}
              >
                Цаг
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
                Статус
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
                Дэлгэрэнгүй
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
              <TableCell>{table.time}</TableCell>
              <TableCell>{table.paid}</TableCell>
              <TableCell width={180} sx={{ width: "180px" }}>
                <FormControl fullWidth>
                  <Select
                    sx={{
                      borderRadius: "100px",
                      height: "32px",
                    }}
                    value={menu}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Бэлтгэгдэж байна</MenuItem>
                    <MenuItem value={2}>Хүргэлтэнд гарсан</MenuItem>
                    <MenuItem value={3}>Хүргэгдсэн</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <ChevronRight />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};
